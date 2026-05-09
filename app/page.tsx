export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* تأثيرات الخلفية المتوهجة */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* شريط التنقل الزجاجي */}
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-wide">
            صائد الفرص
          </h1>
          <a href="/dashboard" className="px-6 py-2.5 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 text-sm font-medium">
            تسجيل الدخول
          </a>
        </div>
      </nav>

      {/* القسم الرئيسي */}
      <section className="relative pt-40 pb-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
            مدعوم بالذكاء الاصطناعي المتقدم 🤖
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            اكتشف عملاءك القادمين <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              بضغطة زر!
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            أداة ذكية تدمج بين قوة الذكاء الاصطناعي واستراتيجيات التسويق الحديثة للبحث عن العملاء عبر جميع منصات التواصل الاجتماعي.
          </p>
          <a href="/dashboard" className="inline-block px-10 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 font-bold">
            ابدأ الآن مجاناً ←
          </a>
        </div>
      </section>

      {/* مميزات البوت */}
      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">بحث عميق</h3>
            <p className="text-gray-400 text-sm leading-relaxed">يحلل المنصات ويستخرج لك العملاء المحتملين الذين يبحثون عن خدماتك.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:border-pink-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">ذكاء استراتيجي</h3>
            <p className="text-gray-400 text-sm leading-relaxed">يضع لك خطة تسويقية شاملة مع رسائل تواصل مخصصة لكل عميل.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:border-red-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">ترويج احترافي</h3>
            <p className="text-gray-400 text-sm leading-relaxed">ينشئ لك إعلانات وترويجات مذهلة تجذب العملاء إليك مباشرة.</p>
          </div>
        </div>
      </section>

      {/* قسم الأسعار والدفع (فاخر) */}
      <section className="py-20 px-4 bg-white/[0.02] relative">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">خطط الاشتراك</h3>
          <p className="text-gray-500 text-center mb-12">اختر الخطة المناسبة لتنمية أعمالك</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* باقة مجانية */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
              <h4 className="text-xl font-bold text-gray-300 mb-2">مجاني</h4>
              <p className="text-5xl font-extrabold mb-1">0 <span className="text-lg text-gray-500">ريال</span></p>
              <p className="text-gray-500 text-sm mb-6">للتصفح فقط</p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> استخدام الذكاء الاصطناعي</li>
                <li className="flex items-center gap-2"><span className="text-red-500">✕</span> البحث عن العملاء</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> تصفح الموقع</li>
              </ul>
            </div>
            
            {/* باقة احترافية */}
            <div className="bg-white/5 backdrop-blur-lg border-2 border-purple-500/50 p-8 rounded-3xl relative shadow-2xl shadow-purple-500/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-sm font-bold">
                الأكثر طلباً ⭐
              </div>
              <h4 className="text-xl font-bold text-white mb-2">احترافي</h4>
              <p className="text-5xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">25 <span className="text-lg text-gray-400">ريال / شهر</span></p>
              <p className="text-purple-300 text-sm mb-6">وصول كامل غير محدود</p>
              
              <div className="bg-black/40 p-5 rounded-2xl border border-white/10 mb-6">
                <p className="font-bold text-white mb-3 text-center text-lg">💳 تفاصيل التحويل البنكي</p>
                <ul className="space-y-2 text-gray-300 text-sm text-right">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-gray-500">الاسم:</span> <strong>متعب سعد</strong></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-gray-500">البنك:</span> <strong>بنك الراجحي</strong></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-gray-500">الايبان:</span> <strong dir="ltr" className="text-xs">SA62 8000 0147 6080 1605 5349</strong></li>
                  <li className="flex justify-between"><span className="text-gray-500">الحساب:</span> <strong dir="ltr" className="text-xs">147000010006086055349</strong></li>
                </ul>
              </div>

              <div className="text-center bg-green-500/10 border border-green-500/20 p-3 rounded-xl">
                <p className="text-green-400 font-bold text-lg">📞 للتواصل: 0556253522</p>
                <p className="text-green-300/70 text-xs mt-1">بعد التحويل، تواصل معنا لتفعيل حسابك فوراً</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="text-center p-8 text-gray-600 border-t border-white/5 text-sm">
        جميع الحقوق محفوظة © صائد الفرص 2024
      </footer>
    </main>
  );
}