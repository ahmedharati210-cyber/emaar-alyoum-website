import { Building2, Target, Heart, TrendingUp, CheckCircle2, Award } from "lucide-react";

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">من نحن</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              شركة رائدة في مجال استيراد وتوزيع المواد الغذائية عالية الجودة
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-10 md:p-12 shadow-lg border-2 border-primary-100">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-center mb-6">
                شركة <strong className="text-primary-700">الطريق الصحيح</strong> هي شركة ليبية رائدة تأسست عام{" "}
                <strong>2018</strong>، تعمل في مجال <strong>استيراد المواد الغذائية</strong> وتوزيعها، مع تركيز
                خاص على المنتجات ذات الجودة العالية والمعايير الموثوقة.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                منذ بدايتنا، عملنا على بناء شبكة تعاون قوية مع أفضل الموردين لضمان تقديم منتجات ذات جودة
                ممتازة للسوق المحلي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Started */}
      <section className="section-padding bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="card p-10 md:p-12 bg-white border-2 border-primary-100 shadow-xl">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">كيف بدأت الشركة؟</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    انطلقت الشركة من رؤية واضحة لتوفير بديل موثوق وعالي الجودة داخل السوق الليبية، مع التركيز
                    على استيراد منتجات متميزة تلبي احتياجات العملاء على مستوى الجودة والتنوع والسعر المناسب.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">ما يميزنا</h2>
            <p className="section-subtitle">
              التزامنا بالجودة والتميز في كل ما نقدمه
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "منتجات مختارة بعناية",
                description: "ننتقي أجود المنتجات الغذائية العالمية فقط، مع ضمان أعلى معايير الجودة.",
                color: "primary",
              },
              {
                icon: Heart,
                title: "وكالة Dolce Chocolate",
                description: "نمتلك وكالة Dolce Chocolate حصريًا في ليبيا، مما يضمن جودة وتوفر المنتجات.",
                color: "secondary",
              },
              {
                icon: TrendingUp,
                title: "معايير صارمة",
                description: "نلتزم بمعايير صارمة في الجودة والتعبئة والتوزيع لضمان رضا العملاء.",
                color: "primary",
              },
              {
                icon: Building2,
                title: "توسع مستقبلي",
                description: "نستعد لتوسيع أعمالنا مستقبلًا وفق أعلى المقاييس العالمية.",
                color: "secondary",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                primary: {
                  bg: "from-primary-50 to-primary-100/50",
                  border: "border-primary-200",
                  icon: "from-primary-500 to-primary-600 shadow-primary-500/30",
                },
                secondary: {
                  bg: "from-secondary-50 to-secondary-100/50",
                  border: "border-secondary-200",
                  icon: "from-secondary-500 to-secondary-600 shadow-secondary-500/30",
                },
              };
              const colors = colorClasses[item.color as keyof typeof colorClasses];
              return (
                <div key={index} className={`card card-hover p-8 group bg-gradient-to-br ${colors.bg} border-2 ${colors.border} shadow-lg`}>
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

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-white to-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card p-10 md:p-12 border-t-4 border-primary-600 bg-gradient-to-br from-white to-primary-50/30 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">رؤيتنا</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                أن نصبح من أبرز الشركات الليبية في قطاع استيراد وتوزيع المنتجات الغذائية الموثوقة.
              </p>
            </div>

            <div className="card p-10 md:p-12 border-t-4 border-secondary-600 bg-gradient-to-br from-white to-secondary-50/30 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg shadow-secondary-500/30">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">رسالتنا</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                تقديم منتجات ذات جودة عالية تلبي احتياجات السوق الليبي وتبني علاقة ثقة دائمة مع المستهلك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dolce Chocolate Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="card p-10 md:p-16 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white border-0 shadow-2xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Dolce Chocolate</h2>
                <p className="text-xl text-white/90">جودة تتجاوز الطعم</p>
              </div>

              <div className="mb-8 text-center">
                <p className="text-lg text-white/95 leading-relaxed max-w-3xl mx-auto">
                  تأسست علامتنا <strong>Dolce Chocolate</strong> عام <strong>2019</strong> لتكون واحدة من العلامات
                  التي تمثل الفخامة في عالم الشوكولاتة.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary-200" />
                    ما الذي يميز Dolce؟
                  </h3>
                  <ul className="space-y-4 text-white">
                    {[
                      "خامات ممتازة",
                      "نكهات فاخرة",
                      "تغليف عصري",
                      "جودة تصنيع عالية",
                      "التزام بمعايير نظافة وسلامة الأغذية",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary-200 rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary-200" />
                    منتجات Dolce المتوفرة
                  </h3>
                  <ul className="space-y-4 text-white">
                    {[
                      "شوكولاتة سادة",
                      "أصابع شوكولاتة",
                      "شوكولاتة بنكهات متعددة",
                      "منتجات قيد الإضافة مستقبلاً",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary-200 rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
