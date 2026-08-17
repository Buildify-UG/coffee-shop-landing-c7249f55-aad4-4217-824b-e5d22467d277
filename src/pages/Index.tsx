import { Coffee, Clock, MapPin, Phone, Mail, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Index() {
  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold' },
    { name: 'Cappuccino', price: '$4.50', description: 'Creamy perfection' },
    { name: 'Latte', price: '$4.50', description: 'Smooth and velvety' },
    { name: 'Americano', price: '$3.75', description: 'Classic strength' },
    { name: 'Macchiato', price: '$4.75', description: 'Espresso marked with milk' },
    { name: 'Mocha', price: '$5.00', description: 'Chocolate heaven' },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '6:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 6:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-amber-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Coffee className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Brew Haven</h1>
          </div>
          <p className="text-amber-100">Crafted with passion</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center py-20 px-4" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1920&h=600&fit=crop)',
        backgroundBlend: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Your Daily Escape</h2>
          <p className="text-xl mb-8 text-amber-100">Premium coffee, cozy atmosphere, and warm smiles</p>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
            Order Now
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white border-2 border-amber-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="bg-amber-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">Hours of Operation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hours.map((hour, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <p className="font-bold text-amber-900 mb-2">{hour.day}</p>
                <p className="text-gray-600">{hour.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Coffee Street<br />Brew City, BC 12345</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="font-bold text-amber-900 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@brewhaven.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Brew Haven</h3>
              <p className="text-amber-100">Crafted with passion, served with love</p>
            </div>
            <div className="flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-amber-800 pt-6 text-center">
            <p className="text-amber-100">&copy; 2024 Brew Haven. All rights reserved. ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
