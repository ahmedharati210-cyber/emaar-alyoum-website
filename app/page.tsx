import Link from "next/link";
import { Building2, Hammer, Home, CheckCircle2, ArrowLeft, Award, Users, Clock, Shield, Lightbulb } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-dark via-gray-800 to-accent-dark text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container-custom relative pt-32 pb-20 md:pb-28 lg:pb-36">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-secondary-500/20 backdrop-blur-sm border border-secondary-400/30 rounded-full mb-6">
                  <span className="text-secondary-200 text-sm font-semibold">شركة إعمار اليوم</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block mb-3">بناء المستقبل</span>
                  <span className="block text-secondary-300">تحقيق الرؤية</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                  شركة متخصصة في الخدمات العقارية والاستثمار العقاري، تجمع بين الخبرة المهنية والرؤية المستقبلية لتقديم حلول عقارية متكاملة
            </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="px-8 py-4 bg-secondary-500 text-white rounded-xl font-semibold hover:bg-secondary-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                تعرّف علينا
                <ArrowLeft className="w-5 h-5" />
              </Link>
                  <Link href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                اتصل بنا
              </Link>
            </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-3xl blur-3xl transform rotate-6"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <Building2 className="w-12 h-12 text-secondary-400 mb-4" />
                        <div className="text-3xl font-bold mb-2">15</div>
                        <div className="text-sm text-gray-300">مشروع منجز</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <Users className="w-12 h-12 text-primary-400 mb-4" />
                        <div className="text-3xl font-bold mb-2">120+</div>
                        <div className="text-sm text-gray-300">عميل راضٍ</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <Award className="w-12 h-12 text-secondary-400 mb-4" />
                        <div className="text-3xl font-bold mb-2">19+</div>
                        <div className="text-sm text-gray-300">سنة خبرة</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <Home className="w-12 h-12 text-primary-400 mb-4" />
                        <div className="text-3xl font-bold mb-2">12</div>
                        <div className="text-sm text-gray-300">مشروع جاري</div>
          </div>
        </div>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">نبذة عن شركة إعمار اليوم</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 md:p-14 shadow-xl border-2 border-gray-100">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 text-center">
                شركة <strong className="text-primary-700">إعمار اليوم</strong> هي شركة متخصصة في الخدمات العقارية والاستثمار العقاري، تجمع بين الخبرة المهنية والرؤية المستقبلية لتقديم حلول عقارية متكاملة — سواء مشاريع سكنية، تجارية أو استثمارية.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                تهدف الشركة إلى توفير بيئة سكنية واستثمارية مرموقة عبر:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "تخطيط وتصميم وتنفيذ المشاريع السكنية والتجارية باستخدام فريق من المهندسين والمصممين المهرة",
                  "إدارة مشاريع متكاملة، من مرحلة الفكرة والتصميم، إلى البناء، التسليم، وخدمات ما بعد البيع إن لزم",
                  "خدمات شاملة للمستثمر/الزبون: من تقديم الاستشارات العقارية، حصر الكميات، أعمال التصميم والإشراف، إلى تسليم المشروع بجودة عالية",
                  "الشفافية والمصداقية في التعامل مع الزبائن والمستثمرين، مع الالتزام بالمواعيد ومعايير البناء والتشطيب",
                  "تحقيق حلم السكن أو الاستثمار؛ أي كانت رغبة الزبون — بيت سكني، شقة، وحدة تجارية أو مشروع استثماري — تعمل إعمار اليوم على تحويله إلى واقع ملموس",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">رؤيتنا وقيمنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              التزامنا بالتميز في كل مشروع ننفذه
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Award,
                title: "جودة التنفيذ",
                description: "نضمن أن تكون جميع المشاريع مطابقة للمواصفات الهندسية والمعمارية بأعلى معايير الجودة",
                color: "primary",
              },
              {
                icon: Lightbulb,
                title: "تصميم مميز",
                description: "تصميمات عصرية، عملية، وتراعي احتياجات الزبون — من المساحات، الطوابق، التوزيع الداخلي وحتى التفاصيل",
                color: "secondary",
              },
              {
                icon: Clock,
                title: "الالتزام بالمواعيد",
                description: "بدء العمل بعد الاتفاق والدفع المبدئي (عربون) — والانتهاء في الوقت المحدد",
                color: "primary",
              },
              {
                icon: Shield,
                title: "الشفافية مع الزبون",
                description: "توفير عقد أو نموذج واضح يتضمن بيانات الزبون، تفاصيل المشروع، دفعات، وشروط — حتى يكون كل شيء موثّق",
                color: "secondary",
              },
              {
                icon: Building2,
                title: "خدمة متكاملة",
                description: "من الفكرة إلى التسليم — وما بعده إن احتاج الزبون خدمات صيانة أو متابعة",
                color: "primary",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                primary: {
                  bg: "from-primary-50 to-primary-100/50",
                  border: "border-primary-200",
                  icon: "from-primary-500 to-primary-600",
                },
                secondary: {
                  bg: "from-secondary-50 to-secondary-100/50",
                  border: "border-secondary-200",
                  icon: "from-secondary-500 to-secondary-600",
                },
              };
              const colors = colorClasses[item.color as keyof typeof colorClasses];
              return (
                <div key={index} className={`group bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.icon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
              </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">خدماتنا</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم حلولاً شاملة لجميع احتياجاتك العقارية
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full mt-4"></div>
          </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Home,
                  title: "مشاريع سكنية",
                  description: "تصميم وتنفيذ المشاريع السكنية بجودة عالية ومواصفات ممتازة",
                },
                {
                  icon: Building2,
                  title: "مشاريع تجارية",
                  description: "إنشاء وتطوير المشاريع التجارية والاستثمارية",
                },
                {
                  icon: Hammer,
                  title: "المقاولات العامة",
                  description: "تنفيذ جميع أعمال البناء والتشطيب والديكور",
                },
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-dark via-gray-800 to-accent-dark text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
              هل تريد تحقيق حلمك العقاري؟
              </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              تواصل معنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك في تحقيق مشروعك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-secondary-500 text-white rounded-xl font-semibold hover:bg-secondary-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                  اتصل بنا الآن
                </Link>
              <Link href="/about" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                  تعرّف على المزيد
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
