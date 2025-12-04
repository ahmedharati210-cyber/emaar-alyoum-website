import Link from "next/link";
import { Package, Award, Users, TrendingUp, CheckCircle2, ArrowLeft } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container-custom relative pt-24 pb-16 md:pb-24 lg:pb-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.3] tracking-tight">
              <div className="mb-4">الطريق الصحيح</div>
              <div className="text-secondary-200">لاستيراد أجود المواد الغذائية</div>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              نقدّم لكم منتجات مختارة بعناية من أفضل العلامات العالمية، وعلى رأسها العلامة الحصرية{" "}
              <span className="font-semibold text-secondary-200">Dolce Chocolate</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/about" className="px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-2">
                تعرّف علينا
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-secondary-500 text-white border-2 border-secondary-400 rounded-xl font-semibold hover:bg-secondary-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-primary-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-3">2018</div>
              <div className="text-base md:text-lg text-gray-700 font-semibold">سنة التأسيس</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-secondary-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-secondary-600 mb-3">3</div>
              <div className="text-base md:text-lg text-gray-700 font-semibold">فروع في طرابلس</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-primary-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-3">100%</div>
              <div className="text-base md:text-lg text-gray-700 font-semibold">جودة مضمونة</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-secondary-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-bold text-secondary-600 mb-3">حصري</div>
              <div className="text-base md:text-lg text-gray-700 font-semibold">Dolce Chocolate</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-gray-100 via-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title">نبذة عن الشركة</h2>
              <p className="section-subtitle">
                شركة رائدة في مجال استيراد وتوزيع المواد الغذائية عالية الجودة
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 md:p-12 shadow-lg border border-gray-200">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
                تأسست شركة <strong className="text-primary-700">الطريق الصحيح</strong> سنة{" "}
                <strong>2018</strong>، وبدأت رحلتها بخطوات ثابتة في مجال استيراد المواد الغذائية عالية الجودة.
                من خلال التزام صارم بمعايير الانتقاء ومنح السوق الليبية منتجات موثوقة، أصبحت الشركة مرجعًا
                معتمدًا في قطاع الاستيراد الغذائي في طرابلس.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">ما يميزنا</h2>
            <p className="section-subtitle">
              نلتزم بأعلى معايير الجودة والتميز في كل ما نقدمه
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card card-hover p-8 group bg-gradient-to-br from-white to-primary-50/30 border-2 border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">جودة عالية</h3>
              <p className="text-gray-700 leading-relaxed">
                ننتقي أجود المنتجات الغذائية العالمية فقط، مع التزام بمعايير صارمة في الجودة والتعبئة والتوزيع.
              </p>
            </div>

            <div className="card card-hover p-8 group bg-gradient-to-br from-white to-secondary-50/30 border-2 border-secondary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-secondary-500/30">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">وكالة حصرية</h3>
              <p className="text-gray-700 leading-relaxed">
                نمتلك وكالة <strong className="text-secondary-700">Dolce Chocolate</strong> حصريًا في ليبيا،
                مما يضمن جودة وتوفر المنتجات.
              </p>
            </div>

            <div className="card card-hover p-8 group bg-gradient-to-br from-white to-primary-50/30 border-2 border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ثقة العملاء</h3>
              <p className="text-gray-700 leading-relaxed">
                نستعد لتوسيع أعمالنا مستقبلًا وفق أعلى المقاييس العالمية لخدمة عملائنا بشكل أفضل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">لماذا تختارنا؟</h2>
            <p className="text-xl text-white/90">
              نحن ملتزمون بتقديم أفضل تجربة لعملائنا
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "منتجات مختارة بعناية من أفضل الموردين العالميين",
              "معايير صارمة في الجودة والسلامة الغذائية",
              "شبكة توزيع واسعة تغطي طرابلس",
              "خدمة عملاء متميزة وموثوقة",
              "أسعار تنافسية وجودة عالية",
              "التزام بالجودة في كل خطوة",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-secondary-200 flex-shrink-0 mt-0.5" />
                <p className="text-white text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-12 md:p-16 text-center bg-gradient-to-br from-primary-600 to-secondary-600 text-white border-0 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                هل تريد معرفة المزيد؟
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                تواصل معنا اليوم لمعرفة المزيد عن منتجاتنا وخدماتنا
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                  اتصل بنا الآن
                </Link>
                <Link href="/about" className="px-8 py-4 bg-secondary-500 text-white border-2 border-secondary-400 rounded-xl font-semibold hover:bg-secondary-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                  تعرّف على المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
