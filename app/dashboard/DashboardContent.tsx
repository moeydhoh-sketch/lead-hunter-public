"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function DashboardContent() {
  const { data: session, status } = useSession();
  const [isApproved, setIsApproved] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      fetch('/api/user-status')
        .then(res => res.json())
        .then(data => {
          setIsApproved(data.isApproved || false);
          setDaysLeft(data.daysLeft || 0);
          setLoadingData(false);
        })
        .catch(() => setLoadingData(false));
    } else if (status !== "loading") {
      setLoadingData(false);
    }
  }, [session, status]);

  const generateLeads = async () => {
    if (!query.trim()) return;
    setAiLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/generate-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult(data.result);
      } else {
        setResult("**خطأ:** " + (data.error || "حدث خطأ"));
      }
    } catch (error) {
      setResult("**خطأ:** حدث خطأ في الاتصال بالسيرفر");
    }
    setAiLoading(false);
  };

  if (status === "loading" || loadingData) {
    return <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">جاري التحميل...</div>;
  }

  if (!session) {
    return (
      <div dir="rtl" className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center gap-6 p-4">
        <h2 className="text-3xl font-bold">يرجى تسجيل الدخول للمتابعة</h2>
        <p className="text-gray-400">استخدم حسابك في جوجل للدخول</p>
        <button onClick={() => signIn("google")} className="px-8 py-4 bg-white text-black rounded-2xl hover:bg-gray-200 transition text-lg font-bold">
          التسجيل بحساب جوجل
        </button>
        <a href="/" className="text-purple-400 hover:underline text-sm mt-4">العودة للصفحة الرئيسية</a>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#050505] text-white p-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl font-bold">مرحباً، {session.user?.name}</h2>
            <p className="text-gray-500 text-sm">{session.user?.email}</p>
          </div>
          <div className="flex gap-3">
            <a href="/" className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition text-sm">الرئيسية</a>
            <button onClick={() => signOut()} className="px-4 py-2 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/40 transition text-sm">خروج</button>
          </div>
        </div>

        {isApproved && daysLeft <= 3 && daysLeft > 0 && (
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-2xl mb-6 text-yellow-300 text-center">
            ⏳ تنبيه: باقي {daysLeft} أيام على انتهاء اشتراكك! جدده للاستمرار.
          </div>
        )}

        {isApproved ? (
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">🤖 مساعد الذكاء الاصطناعي</h3>
            <p className="text-gray-400 mb-6">اكتب وصف خدمتك أو منتجك وسأساعدك في إيجاد العملاء واستراتيجيات التسويق.</p>
            
            <textarea 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="مثال: أقدم خدمات تصميم مواقع وأريد استهداف أصحاب المتاجر الإلكترونية..."
              className="w-full h-40 p-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 resize-none mb-4"
            />
            <button onClick={generateLeads} disabled={aiLoading} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl hover:opacity-90 transition font-bold text-lg disabled:opacity-50">
              {aiLoading ? "⏳ جاري التحليل..." : "✨ ابحث عن العملاء"}
            </button>

            {result && (
              <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 prose prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-2xl mb-6 text-red-300">
              🔒 الاشتراك غير مفعل - يرجى التحويل البنكي أولاً
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border-2 border-purple-500/50 p-8 rounded-3xl max-w-md mx-auto">
              <h4 className="text-xl font-bold text-white mb-4">💳 تفاصيل التحويل البنكي</h4>
              <div className="bg-black/40 p-5 rounded-2xl border border-white/10 text-right space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-gray-500">الاسم:</span><strong>متعب سعد</strong></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-gray-500">البنك:</span><strong>بنك الراجحي</strong></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-gray-500">الايبان:</span><strong dir="ltr" className="text-xs">SA62 8000 0147 6080 1605 5349</strong></div>
                <div className="flex justify-between"><span className="text-gray-500">الحساب:</span><strong dir="ltr" className="text-xs">147000010006086055349</strong></div>
              </div>
              <div className="mt-4 bg-green-500/10 border border-green-500/20 p-3 rounded-xl text-center">
                <p className="text-green-400 font-bold text-lg">📞 0556253522</p>
                <p className="text-green-300/70 text-xs mt-1">بعد التحويل، تواصل معنا لتفعيل حسابك فوراً</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}