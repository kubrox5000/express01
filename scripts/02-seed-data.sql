-- Insert sample cities in Morocco
INSERT INTO cities (name_ar, name_fr, name_en, delivery_fee) VALUES
('الدار البيضاء', 'Casablanca', 'Casablanca', 25.00),
('الرباط', 'Rabat', 'Rabat', 30.00),
('فاس', 'Fès', 'Fez', 35.00),
('مراكش', 'Marrakech', 'Marrakech', 40.00),
('طنجة', 'Tanger', 'Tangier', 45.00),
('أكادير', 'Agadir', 'Agadir', 50.00),
('مكناس', 'Meknès', 'Meknes', 35.00),
('وجدة', 'Oujda', 'Oujda', 40.00),
('تطوان', 'Tétouan', 'Tetouan', 45.00),
('الجديدة', 'El Jadida', 'El Jadida', 30.00);

-- Create RLS (Row Level Security) policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sellers ENABLE ROW LEVEL SECURITY;
ALTER TABLE drivers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Enable insert for authenticated users only" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Sellers policies
CREATE POLICY "Sellers can view their own data" ON sellers FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Sellers can update their own data" ON sellers FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "Enable insert for authenticated users" ON sellers FOR INSERT WITH CHECK (user_id = auth.uid());

-- Orders policies
CREATE POLICY "Users can view their own orders" ON orders FOR SELECT USING (
    customer_id = auth.uid() OR 
    seller_id IN (SELECT id FROM sellers WHERE user_id = auth.uid()) OR
    driver_id IN (SELECT id FROM drivers WHERE user_id = auth.uid())
);

-- Cities are public
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Cities are viewable by everyone" ON cities FOR SELECT USING (true);
