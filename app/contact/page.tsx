"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const branches = [
    {
      name: "فرع بن عاشور",
      address: "طرابلس، بن عاشور، بالقرب من الإشارة الضوئية في اتجاه جامع الصقع",
      phone: "0917040088",
      hours: "10:30 صباحًا – 11:00 مساءً",
    },
    {
      name: "فرع السياحية",
      address: "طرابلس، السياحية، بالشارع المقابل لمعهد النفط (شارع السفارة القطرية)",
      phone: "0927040088",
      hours: "8:00 صباحًا – 9:00 مساءً",
    },
    {
      name: "فرع مارينا حي الاندلس",
      address: "طرابلس، حي الاندلس، في مرينا حي الاندلس",
      phone: "0917040088",
      hours: "9:00 صباحًا – 8:00 مساءً",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white section-padding overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">اتصل بنا</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="card card-hover p-8 text-center group bg-gradient-to-br from-primary-50 to-primary-100/50 border-2 border-primary-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">الهاتف</h3>
              <a
                href="tel:0917040088"
                className="text-primary-700 hover:text-primary-800 text-lg font-semibold transition-colors"
              >
                0917040088
              </a>
            </div>

            <div className="card card-hover p-8 text-center group bg-gradient-to-br from-secondary-50 to-secondary-100/50 border-2 border-secondary-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-secondary-500/30">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">البريد الإلكتروني</h3>
              <a
                href="mailto:info@altaareeq.com"
                className="text-secondary-700 hover:text-secondary-800 text-lg font-semibold break-all transition-colors"
              >
                info@altaareeq.com
              </a>
            </div>

            <div className="card card-hover p-8 text-center group bg-gradient-to-br from-primary-50 to-primary-100/50 border-2 border-primary-200 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">العنوان</h3>
              <p className="text-gray-700 font-medium">طرابلس – ليبيا</p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="section-padding bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">فروعنا</h2>
            <p className="section-subtitle">
              نوفر لك خدمة ممتازة من خلال فروعنا المنتشرة في طرابلس
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="card card-hover p-8 bg-white border-2 border-gray-200 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{branch.name}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1.5">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-secondary-600" />
                    </div>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-primary-700 hover:text-primary-800 font-semibold transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <p className="text-gray-700 font-medium">{branch.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">أرسل لنا رسالة</h2>
              <p className="section-subtitle">
                سنكون سعداء للرد على استفساراتك في أقرب وقت ممكن
              </p>
            </div>
            <div className="card p-10 md:p-12 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-xl">
              {isSubmitted && (
                <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">تم إرسال رسالتك بنجاح!</p>
                    <p className="text-sm text-green-700">شكرًا لتواصلك معنا. سنرد عليك قريبًا.</p>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-right">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all text-right bg-white"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-right">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all text-right bg-white"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-right">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all text-right bg-white"
                    placeholder="0912345678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-right">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-600/20 focus:border-primary-600 outline-none transition-all resize-none text-right bg-white"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الرسالة
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
