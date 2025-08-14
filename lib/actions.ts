"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Sign in action
export async function signIn(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) {
    return { error: "البريد الإلكتروني وكلمة المرور مطلوبان" }
  }

  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.toString(),
      password: password.toString(),
    })

    if (error) {
      return { error: "بيانات الدخول غير صحيحة" }
    }

    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return { error: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى." }
  }
}

// Sign up action
export async function signUp(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")
  const fullName = formData.get("fullName")
  const phone = formData.get("phone")
  const role = formData.get("role") || "customer"

  if (!email || !password || !fullName || !phone) {
    return { error: "جميع الحقول مطلوبة" }
  }

  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.toString(),
      password: password.toString(),
      options: {
        emailRedirectTo:
          process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
          `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
        data: {
          full_name: fullName.toString(),
          phone: phone.toString(),
          role: role.toString(),
        },
      },
    })

    if (error) {
      return { error: "فشل في إنشاء الحساب. يرجى المحاولة مرة أخرى." }
    }

    // Create profile record
    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        email: email.toString(),
        full_name: fullName.toString(),
        phone: phone.toString(),
        role: role.toString(),
      })

      if (profileError) {
        console.error("Profile creation error:", profileError)
      }
    }

    return { success: "تم إنشاء الحساب بنجاح. يرجى التحقق من بريدك الإلكتروني." }
  } catch (error) {
    console.error("Sign up error:", error)
    return { error: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى." }
  }
}

// Sign out action
export async function signOut() {
  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  await supabase.auth.signOut()
  redirect("/auth/login")
}
