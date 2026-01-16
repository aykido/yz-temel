import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Brain,
  Database, // Veri Bilimi için
  Activity, // Aktivasyon/Eğitim için
  Layers,   // Derin Öğrenme Katmanları için
  Cpu,
  CheckCircle,
  AlertTriangle,
  Send,
  RefreshCw,
  Camera,
  BookOpen,
  Lightbulb,
  ClipboardList,
  Check,
  X,
  HelpCircle,
  Award,
  BarChart2,
  Settings
} from 'lucide-react';

export default function AIWorkshopApp() {
  const [activeModule, setActiveModule] = useState(0);

  // Müfredata Uygun Yeni Modül Listesi
  const modules = [
    { id: 0, title: 'Ana Sayfa & Giriş', icon: <Brain size={24} /> },
    { id: 1, title: 'Modül 1: İSG & Güvenlik', icon: <ShieldCheck size={24} /> },
    { id: 2, title: 'Modül 2: Veri Bilimi & Sınıflandırma', icon: <Database size={24} /> },
    { id: 3, title: 'Modül 3: Yapay Sinir Ağları', icon: <Activity size={24} /> },
    { id: 4, title: 'Modül 4: Derin Öğrenme (CNN)', icon: <Layers size={24} /> },
    { id: 5, title: 'Final Sınavı', icon: <ClipboardList size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Üst Bar */}
      <header className="bg-blue-700 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="animate-pulse flex-shrink-0" />
            <h1 className="text-sm md:text-xl font-bold leading-tight">Yayın Eğitim Uyumlu Temel Yapay Zeka Okuryazarlığı Kursu</h1>
          </div>
          <div className="text-xs md:text-sm bg-blue-800 px-3 py-1 rounded-full border border-blue-400 flex-shrink-0 ml-2">
            Müfredat Uyumlu v2.1
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6 mt-4">
        {/* Sol Menü */}
        <nav className="md:w-64 bg-white rounded-xl shadow-md p-4 h-fit flex-shrink-0">
          <h2 className="text-lg font-bold mb-4 text-slate-600 px-2 border-b pb-2">Eğitim Modülleri</h2>
          <ul className="space-y-2">
            {modules.map((mod) => (
              <li key={mod.id}>
                <button
                  onClick={() => setActiveModule(mod.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${activeModule === mod.id
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'hover:bg-slate-100 text-slate-600'
                    }`}
                >
                  {mod.icon}
                  <span className="font-medium text-sm">{mod.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ana İçerik Alanı */}
        <main className="flex-1 bg-white rounded-xl shadow-md p-6 min-h-[600px] flex flex-col">
          <div className="flex-1">
            {activeModule === 0 && <WelcomeScreen setModule={setActiveModule} />}
            {activeModule === 1 && <SafetyModule />}
            {activeModule === 2 && <DataScienceModule />}
            {activeModule === 3 && <NeuralNetworkModule />}
            {activeModule === 4 && <DeepLearningModule />}
            {activeModule === 5 && <FinalExamModule />}
          </div>

          <footer className="mt-8 pt-4 border-t text-center text-slate-400 text-xs">
            MEB Hayat Boyu Öğrenme Genel Müdürlüğü Müfredatına Uygundur. <br /> Hazırlayan: Aykut BOZALAN
          </footer>
        </main>
      </div>
    </div>
  );
}

// --- Yardımcı Bileşen: Ders Notu Kartı ---
function LessonCard({ title, items }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8 shadow-sm">
      <h3 className="text-lg font-bold text-blue-800 flex items-center gap-2 mb-3">
        <BookOpen size={20} />
        Kazanım Bilgisi: {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm md:text-base">
            <span className="mt-1 text-blue-500">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- MODÜLLER ---

function WelcomeScreen({ setModule }) {
  return (
    <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in duration-500">
      <div className="bg-blue-100 p-6 rounded-full w-28 h-28 mx-auto flex items-center justify-center text-blue-600 shadow-inner">
        <Brain size={56} />
      </div>
      <h2 className="text-3xl font-bold text-slate-800">Yapay Zeka Uygulamaları Kursu</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Bu simülasyon, <strong>"Yapay Zekâ Uygulamaları Geliştirme ve Uyum Eğitimi"</strong> kurs programı kazanımlarına göre tasarlanmıştır.
        Teorik bilgileri burada interaktif olarak deneyimleyeceksiniz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
        <div className="p-4 border rounded-lg hover:border-blue-500 hover:shadow-md cursor-pointer transition bg-slate-50" onClick={() => setModule(1)}>
          <h3 className="font-bold flex items-center gap-2 text-slate-700"><ShieldCheck size={20} className="text-green-500" /> Modül 1: İSG</h3>
          <p className="text-xs text-slate-500 mt-1">Güvenlik önlemleri ve ergonomi.</p>
        </div>
        <div className="p-4 border rounded-lg hover:border-blue-500 hover:shadow-md cursor-pointer transition bg-slate-50" onClick={() => setModule(2)}>
          <h3 className="font-bold flex items-center gap-2 text-slate-700"><Database size={20} className="text-purple-500" /> Modül 2: Veri Bilimi</h3>
          <p className="text-xs text-slate-500 mt-1">Sınıflandırma algoritmaları ve veri.</p>
        </div>
        <div className="p-4 border rounded-lg hover:border-blue-500 hover:shadow-md cursor-pointer transition bg-slate-50" onClick={() => setModule(3)}>
          <h3 className="font-bold flex items-center gap-2 text-slate-700"><Activity size={20} className="text-indigo-500" /> Modül 3: YSA</h3>
          <p className="text-xs text-slate-500 mt-1">Nöronlar, eğitim ve aktivasyon.</p>
        </div>
      </div>
    </div>
  );
}

function SafetyModule() {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});

  const questions = [
    { id: 1, q: "İş kazalarından korunmak için en temel önlem nedir?", options: ["Hızlı çalışmak", "Riskleri önceden belirleyip önlem almak", "İşi başkasına devretmek"], correct: 1 },
    { id: 2, q: "Bilgisayar başında ideal duruş nasıldır?", options: ["Sırt destekli, ayaklar yerde", "Uzanarak", "Ekrana çok yakın"], correct: 0 },
    { id: 3, q: "Acil durumda ilk ne yapılmalıdır?", options: ["Panik yapmak", "Sosyal medyada paylaşmak", "Acil durum planını uygulamak (Sakin kalmak)"], correct: 2 },
  ];

  const handleAnswer = (qId, optionIndex, correctIndex) => {
    if (answered[qId]) return;
    const isCorrect = optionIndex === correctIndex;
    if (isCorrect) setScore(s => s + 1);
    setAnswered(prev => ({ ...prev, [qId]: isCorrect ? 'correct' : 'wrong' }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
        <ShieldCheck /> Modül 1: İş Sağlığı ve Güvenliği
      </h2>

      <LessonCard
        title="Kazanımlar: İSG ve Temel Önlemler"
        items={[
          "İş sağlığı ve güvenliğinin amacı: Çalışanların sağlığını korumak ve güvenli bir çalışma ortamı sağlamaktır.",
          "Meslek Hastalıkları: Bilgisayar başında yanlış duruş; boyun, bel ve bilek rahatsızlıklarına yol açar (Ergonomi).",
          "Risk Önlemleri: Kabloları düzenlemek, sıvıları elektronik cihazlardan uzak tutmak.",
          "Acil Durumlar: Yangın veya deprem anında çıkış yollarını bilmek ve sakin kalmak."
        ]}
      />

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-700">
          <Lightbulb className="text-yellow-500" />
          Kazanım Değerlendirme Soruları
        </h3>
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div key={q.id} className="p-4 border rounded-lg bg-white shadow-sm">
              <p className="font-semibold mb-3">{idx + 1}. {q.q}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {q.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleAnswer(q.id, optIdx, q.correct)}
                    disabled={!!answered[q.id]}
                    className={`py-2 px-4 rounded text-sm text-left transition ${answered[q.id]
                      ? optIdx === q.correct
                        ? 'bg-green-500 text-white'
                        : answered[q.id] === 'wrong' && 'opacity-50'
                      : 'bg-slate-50 border hover:bg-blue-50'
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {answered[q.id] && (
                <div className={`mt-2 text-sm font-bold ${answered[q.id] === 'correct' ? 'text-green-600' : 'text-red-500'}`}>
                  {answered[q.id] === 'correct' ? 'Tebrikler, doğru önlem!' : 'Yanlış, güvenlik kurallarını hatırlayalım.'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DataScienceModule() {
  const [threshold, setThreshold] = useState(50);

  // Simüle edilmiş veri seti: Boyutuna göre Elma veya Karpuz
  // Küçükler (<50) Elma, Büyükler (>50) Karpuz olmalı
  const dataset = [
    { id: 1, size: 20, type: 'Elma', icon: '🍎' },
    { id: 2, size: 35, type: 'Elma', icon: '🍎' },
    { id: 3, size: 45, type: 'Elma', icon: '🍎' },
    { id: 4, size: 60, type: 'Karpuz', icon: '🍉' },
    { id: 5, size: 80, type: 'Karpuz', icon: '🍉' },
    { id: 6, size: 90, type: 'Karpuz', icon: '🍉' },
  ];

  const classifiedData = dataset.map(item => ({
    ...item,
    predicted: item.size < threshold ? 'Elma' : 'Karpuz',
    isCorrect: (item.size < threshold ? 'Elma' : 'Karpuz') === item.type
  }));

  const correctCount = classifiedData.filter(d => d.isCorrect).length;
  const accuracy = Math.round((correctCount / dataset.length) * 100);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
        <Database /> Modül 2: Veri Bilimi ve Sınıflandırma
      </h2>

      <LessonCard
        title="Kazanımlar: Sınıflandırma Algoritmaları"
        items={[
          "Veri Bilimi İşlemleri: Ham veriyi anlamlı bilgiye dönüştürme sürecidir.",
          "Sınıflandırma (Classification): Verileri özelliklerine göre gruplara ayırma işlemidir (Örn: Spam olan/olmayan mailler).",
          "Algoritma Mantığı: Bir kural belirleyerek bilgisayarın karar vermesini sağlamaktır.",
          "Makine Öğrenmesi: Bilgisayarın bu kuralı (eşik değerini) veriye bakarak kendisinin bulmasıdır."
        ]}
      />

      <div className="border rounded-xl p-6 bg-white shadow-sm">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-purple-900">
          <Lightbulb className="text-yellow-500" />
          Simülasyon: Meyve Sınıflandırma Algoritması
        </h3>
        <p className="text-slate-600 mb-6 text-sm">
          Aşağıdaki <strong>Eşik Değeri (Kural)</strong> çubuğunu kaydırarak meyveleri "Boyutuna" göre sınıflandırın.
          Amacımız %100 Doğruluk oranına ulaşmak.
        </p>

        <div className="space-y-8">
          {/* Kontrol Alanı */}
          <div className="bg-slate-50 p-4 rounded-lg border">
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Sınıflandırma Kuralı: Boyutu <span className="text-purple-600 text-lg">{threshold}</span> cm'den küçükse Elma'dır.
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={threshold}
              onChange={(e) => setThreshold(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>0 cm</span>
              <span>100 cm</span>
            </div>
          </div>

          {/* Görselleştirme */}
          <div className="relative h-32 border-b-2 border-slate-300 flex items-end pb-2">
            {/* Eşik Çizgisi */}
            <div
              className="absolute h-full border-l-2 border-dashed border-purple-500 transition-all duration-300 flex flex-col justify-between"
              style={{ left: `${threshold}%` }}
            >
              <span className="bg-purple-100 text-purple-800 text-xs px-1 rounded -ml-4">Sınır</span>
            </div>

            {/* Veri Noktaları */}
            {classifiedData.map((item) => (
              <div
                key={item.id}
                className="absolute transition-all duration-500 flex flex-col items-center"
                style={{ left: `${item.size}%`, bottom: '10px' }}
              >
                <div className={`text-3xl ${item.isCorrect ? 'opacity-100' : 'opacity-50 grayscale'}`}>
                  {item.icon}
                </div>
                <div className={`text-[10px] font-bold mt-1 px-1 rounded ${item.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {item.predicted}
                </div>
              </div>
            ))}
          </div>

          {/* Sonuç Kartı */}
          <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg border border-purple-100">
            <div>
              <span className="block text-sm text-purple-800 font-bold">Model Performansı</span>
              <span className="text-xs text-slate-500">Doğru Sınıflandırılan: {correctCount} / {dataset.length}</span>
            </div>
            <div className={`text-2xl font-bold ${accuracy === 100 ? 'text-green-600' : 'text-orange-500'}`}>
              %{accuracy} Doğruluk
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NeuralNetworkModule() {
  const [trainingStep, setTrainingStep] = useState(0);
  const [activation, setActivation] = useState('sigmoid');

  // Basit Perceptron Simülasyonu
  const [weights, setWeights] = useState({ w1: 0.1, w2: 0.1 }); // Başlangıçta rastgele küçük ağırlıklar

  // Eğitim Simülasyonu
  const trainModel = () => {
    if (trainingStep >= 100) return;

    // Simüle edilmiş ağırlık güncellemesi (Hedef: w1=0.8, w2=0.5 gibi düşünelim)
    const interval = setInterval(() => {
      setTrainingStep(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });

      // Ağırlıkların "öğrenmesi"
      setWeights(prev => ({
        w1: Math.min(prev.w1 + 0.04, 0.8),
        w2: Math.min(prev.w2 + 0.02, 0.5)
      }));
    }, 100);
  };

  const resetTraining = () => {
    setTrainingStep(0);
    setWeights({ w1: 0.1, w2: 0.1 });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
        <Activity /> Modül 3: Yapay Sinir Ağları (YSA)
      </h2>

      <LessonCard
        title="Kazanımlar: Yapay Nöron ve Eğitim"
        items={[
          "Yapay Nöron Oluşturma: Biyolojik nöronların matematiksel modelidir. Girdi alır, ağırlıkla çarpar, toplar.",
          "Aktivasyon Fonksiyonları: Nöronun çıktısını kontrol eden filtrelerdir (Sigmoid: 0-1 arası, ReLU: Negatifleri atar).",
          "YSA Modelini Eğitmek: Başlangıçta rastgele olan ağırlıkları, hata oranını azaltacak şekilde güncellemektir."
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nöron Yapısı */}
        <div className="bg-white p-4 rounded-xl shadow-sm border space-y-4">
          <h3 className="font-bold text-indigo-900 border-b pb-2">1. Yapay Nöron Modeli</h3>

          <div className="flex items-center justify-between gap-2 text-sm">
            <div className="space-y-2">
              <div className="bg-slate-100 p-2 rounded text-center w-20">Girdi 1</div>
              <div className="bg-slate-100 p-2 rounded text-center w-20">Girdi 2</div>
            </div>

            <div className="flex flex-col gap-2 text-xs text-slate-500">
              <span>x Ağırlık ({weights.w1.toFixed(1)}) ──►</span>
              <span>x Ağırlık ({weights.w2.toFixed(1)}) ──►</span>
            </div>

            <div className="bg-indigo-100 rounded-full w-24 h-24 flex flex-col items-center justify-center border-2 border-indigo-300 z-10">
              <span className="font-bold text-indigo-800">Σ (Topla)</span>
              <span className="text-xs text-indigo-600 mt-1">Aktivasyon</span>
            </div>

            <div className="text-xs text-slate-500">──► Çıktı</div>
          </div>

          <div className="bg-slate-50 p-3 rounded border">
            <label className="text-sm font-bold text-slate-700 block mb-2">Aktivasyon Fonksiyonu Seç:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setActivation('sigmoid')}
                className={`px-3 py-1 rounded text-sm ${activation === 'sigmoid' ? 'bg-indigo-600 text-white' : 'bg-white border'}`}
              >
                Sigmoid (S Eğrisi)
              </button>
              <button
                onClick={() => setActivation('relu')}
                className={`px-3 py-1 rounded text-sm ${activation === 'relu' ? 'bg-indigo-600 text-white' : 'bg-white border'}`}
              >
                ReLU (Düz)
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {activation === 'sigmoid' ? "Çıktıyı 0 ile 1 arasına sıkıştırır. Olasılık hesaplarında kullanılır." : "Negatif değerleri 0 yapar, pozitifleri olduğu gibi geçirir. Hızlıdır."}
            </p>
          </div>
        </div>

        {/* Eğitim Simülasyonu */}
        <div className="bg-white p-4 rounded-xl shadow-sm border space-y-4">
          <h3 className="font-bold text-indigo-900 border-b pb-2">2. Çok Katmanlı Modeli Eğit</h3>

          <div className="h-32 bg-slate-50 rounded border relative flex items-end px-4 pb-4">
            {/* Hata Grafiği */}
            <div className="w-full h-full flex items-end gap-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-red-400 transition-all duration-500 rounded-t"
                  style={{
                    height: `${i * 5 < trainingStep ? Math.max(10, 100 - (i * 5)) : 0}%`,
                    opacity: i * 5 < trainingStep ? 1 : 0.1
                  }}
                ></div>
              ))}
            </div>
            <div className="absolute top-2 right-2 text-xs font-bold text-red-600 bg-white px-2 py-1 rounded shadow">
              Hata Oranı: %{Math.max(0, 100 - trainingStep)}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={trainModel}
              disabled={trainingStep >= 100}
              className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Settings className={trainingStep > 0 && trainingStep < 100 ? "animate-spin" : ""} size={18} />
              {trainingStep >= 100 ? "Eğitim Tamamlandı" : "Modeli Eğit (Başlat)"}
            </button>
            <button
              onClick={resetTraining}
              className="px-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300"
            >
              <RefreshCw size={18} />
            </button>
          </div>
          <p className="text-xs text-slate-500">
            * "Eğit" butonuna basınca yapay zeka ağırlıkları güncelleyerek hatayı azaltır (Backpropagation).
          </p>
        </div>
      </div>
    </div>
  );
}

function DeepLearningModule() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [selectedDataset, setSelectedDataset] = useState(null); // 'animals' | 'vehicles'

  const animalImages = [
    { id: 1, icon: "🐱", label: "Kedi", prob: "98%" },
    { id: 2, icon: "🐶", label: "Köpek", prob: "95%" }
  ];
  const vehicleImages = [
    { id: 3, icon: "🚗", label: "Araba", prob: "99%" },
    { id: 4, icon: "🚌", label: "Otobüs", prob: "92%" }
  ];

  const currentImages = selectedDataset === 'vehicles' ? vehicleImages : animalImages;

  const handleAnalyze = (img) => {
    setAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      setAnalyzing(false);
      setResult(img);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-700 flex items-center gap-2">
        <Layers /> Modül 4: Derin Öğrenme (Deep Learning)
      </h2>

      <LessonCard
        title="Kazanımlar: Veri Seti ve CNN"
        items={[
          "Uygun Veri Seti Kullanımı: Modeli eğitmek için doğru ve temiz veri seti seçilmelidir. Yanlış veri, yanlış sonuç verir.",
          "Konvolüsyonel Sinir Ağları (CNN): Görsel işlemek için özelleşmiş katmanlı yapıdır.",
          "Konvolüsyon (Filtreleme): Resmin üzerinde gezerek kenarları, köşeleri bulur.",
          "Havuzlama (Pooling): Resmi küçülterek işlem yükünü azaltır ve önemli özellikleri saklar."
        ]}
      />

      <div className="border rounded-xl p-4 bg-white shadow-sm">
        {/* Adım 1: Veri Seti Seçimi */}
        <div className="mb-6 border-b pb-4">
          <h3 className="font-bold text-sm text-slate-500 uppercase mb-3">1. Adım: Eğitim Veri Setini Seç</h3>
          <div className="flex gap-4">
            <button
              onClick={() => { setSelectedDataset('animals'); setResult(null); }}
              className={`flex-1 p-3 rounded-lg border-2 flex items-center justify-center gap-2 transition ${selectedDataset === 'animals' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-slate-200 hover:bg-slate-50'}`}
            >
              <span>🐱🐶</span>
              <span className="font-bold">Hayvanlar Veri Seti</span>
            </button>
            <button
              onClick={() => { setSelectedDataset('vehicles'); setResult(null); }}
              className={`flex-1 p-3 rounded-lg border-2 flex items-center justify-center gap-2 transition ${selectedDataset === 'vehicles' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-slate-200 hover:bg-slate-50'}`}
            >
              <span>🚗🚌</span>
              <span className="font-bold">Araçlar Veri Seti</span>
            </button>
          </div>
        </div>

        {/* Adım 2: Analiz */}
        <div className={`transition-opacity duration-500 ${selectedDataset ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
          <h3 className="font-bold text-sm text-slate-500 uppercase mb-3">2. Adım: CNN ile Nesne Tanıma</h3>
          <p className="text-xs text-slate-500 mb-2">Seçtiğiniz veri setinden bir görsele tıklayarak katmanları izleyin.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {currentImages.map((img) => (
              <button
                key={img.id}
                onClick={() => handleAnalyze(img)}
                disabled={analyzing}
                className={`h-24 bg-slate-50 rounded-lg hover:bg-orange-50 text-5xl flex items-center justify-center border-2 transition active:scale-95 ${result?.id === img.id ? 'border-orange-500 ring-2 ring-orange-200' : 'border-slate-200'
                  }`}
              >
                {img.icon}
              </button>
            ))}
          </div>

          <div className="bg-slate-900 text-green-400 p-6 rounded-xl font-mono min-h-[200px] relative overflow-hidden shadow-inner">
            {analyzing ? (
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-center gap-2 text-white border-b border-slate-700 pb-2 mb-2">
                  <RefreshCw className="animate-spin" size={16} />
                  <span>CNN Katmanları Çalışıyor...</span>
                </div>

                {/* CNN Animasyonu */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-green-500 bg-green-900/30 flex items-center justify-center text-xs animate-pulse">Girdi</div>
                  <div className="text-slate-500">→</div>
                  <div className="w-10 h-10 border border-yellow-500 bg-yellow-900/30 flex items-center justify-center text-[8px] animate-pulse delay-75">Conv</div>
                  <div className="text-slate-500">→</div>
                  <div className="w-8 h-8 border border-blue-500 bg-blue-900/30 flex items-center justify-center text-[8px] animate-pulse delay-150">Pool</div>
                  <div className="text-slate-500">→</div>
                  <div className="w-10 h-10 border border-white bg-slate-700 flex items-center justify-center text-[8px] animate-pulse delay-200">FC</div>
                </div>

                <div className="space-y-1 mt-2 text-xs text-slate-400">
                  <div className="animate-pulse">{'>'} Konvolüsyon katmanı kenarları çıkarıyor...</div>
                  <div className="animate-pulse delay-500">{'>'} Havuzlama boyutu küçültüyor...</div>
                  <div className="animate-pulse delay-1000">{'>'} Tam Bağlantılı (FC) katman karar veriyor...</div>
                </div>

                <div className="w-full bg-slate-800 h-1.5 mt-4 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 h-full animate-[width_3s_ease-in-out] w-full"></div>
                </div>
              </div>
            ) : result ? (
              <div className="text-center animate-bounce-in py-2">
                <h3 className="text-lg text-slate-300 uppercase tracking-widest mb-2">Analiz Sonucu</h3>
                <div className="inline-block p-4 bg-slate-800 rounded-full mb-2 border border-slate-700">
                  <span className="text-5xl">{result.icon}</span>
                </div>
                <p className="text-xl text-white">Sınıf: <span className="font-bold text-orange-400">{result.label}</span></p>
                <p className="text-sm text-slate-400">Olasılık Değeri: {result.prob}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-600 space-y-2">
                <Layers size={48} className="opacity-20" />
                <p>{selectedDataset ? "Bir görsel seçin..." : "Önce yukarıdan bir veri seti seçin."}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalExamModule() {
  const [mcAnswers, setMcAnswers] = useState({});
  const [tfAnswers, setTfAnswers] = useState({});
  const [openAnswerVisibility, setOpenAnswerVisibility] = useState({});

  // Müfredata Uygun Güncellenmiş Sorular
  const mcQuestions = [
    { id: 1, q: "İş sağlığı ve güvenliğinin temel amacı nedir?", options: ["Üretimi artırmak", "Çalışan sağlığını korumak", "Maliyeti düşürmek", "Reklam yapmak"], correct: 1 },
    { id: 2, q: "Hangi işlem 'Veri Bilimi' kapsamına girer?", options: ["Bilgisayar tamiri", "Veri temizleme ve işleme", "Oyun oynama", "Kablo döşeme"], correct: 1 },
    { id: 3, q: "Sınıflandırma algoritması ne yapar?", options: ["Verileri gruplara ayırır", "Resim çizer", "Virüs temizler", "İnterneti hızlandırır"], correct: 0 },
    { id: 4, q: "Yapay sinir ağında 'Aktivasyon Fonksiyonu' ne işe yarar?", options: ["Bilgisayarı soğutur", "Nöron çıktısını belirler", "Veri siler", "Ekranı kapatır"], correct: 1 },
    { id: 5, q: "CNN (Konvolüsyonel Sinir Ağı) en çok hangi alanda kullanılır?", options: ["Metin özeti", "Görüntü işleme", "Ses kaydı", "Hesap tablosu"], correct: 1 }
  ];

  const tfQuestions = [
    { id: 1, q: "İş kazalarını önlemek için riskleri belirlemek gerekir.", correct: true },
    { id: 2, q: "Makine öğrenmesi, veriden öğrenen sistemlerdir.", correct: true },
    { id: 3, q: "Yapay zeka modelleri eğitilmeden de mükemmel çalışır.", correct: false },
    { id: 4, q: "Derin öğrenme, çok katmanlı yapay sinir ağlarını kullanır.", correct: true },
    { id: 5, q: "Veri setinin kalitesi model başarısını etkilemez.", correct: false }
  ];

  const openQuestions = [
    { id: 1, q: "Yapay nöron nedir?", a: "Biyolojik nöronu taklit eden, girdi, ağırlık ve aktivasyon fonksiyonundan oluşan temel işlem birimidir." },
    { id: 2, q: "Eğitim veri seti neden önemlidir?", a: "Model bu veriye bakarak öğrenir. Veri hatalıysa (çöp), model de hatalı öğrenir (çöp çıkar)." },
    { id: 3, q: "Sınıflandırma algoritmasına bir örnek veriniz.", a: "Gelen e-postanın 'Spam' veya 'Normal' olarak ayrılması." },
    { id: 4, q: "Derin öğrenmede 'Katman' ne demektir?", a: "Verinin işlendiği aşamalardır. İlk katmanlar basit özellikleri (kenar), son katmanlar karmaşık özellikleri (yüz) öğrenir." },
    { id: 5, q: "İş kazası durumunda ilk yapılması gereken nedir?", a: "Sakin kalıp, güvenliği sağlayıp acil durum planını uygulamak (yetkililere haber vermek)." }
  ];

  const calculateScore = () => {
    let score = 0;
    Object.keys(mcAnswers).forEach(key => { if (mcAnswers[key]) score += 10; });
    Object.keys(tfAnswers).forEach(key => { if (tfAnswers[key]) score += 10; });
    return score;
  };

  const handleMcAnswer = (qId, optionIdx, correctIdx) => {
    if (mcAnswers.hasOwnProperty(qId)) return;
    setMcAnswers(prev => ({ ...prev, [qId]: optionIdx === correctIdx }));
  };

  const handleTfAnswer = (qId, val, correctVal) => {
    if (tfAnswers.hasOwnProperty(qId)) return;
    setTfAnswers(prev => ({ ...prev, [qId]: val === correctVal }));
  };

  const toggleOpenAnswer = (id) => {
    setOpenAnswerVisibility(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8 pb-10 animate-in slide-in-from-bottom-5">
      <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-center">
        <h2 className="text-3xl font-bold text-red-800 flex items-center justify-center gap-3">
          <Award size={32} /> Final Sınavı
        </h2>
        <p className="text-red-600 mt-2">Toplam 100 puan üzerinden değerlendirme.</p>
        <div className="mt-4 text-4xl font-bold text-red-900 bg-white inline-block px-6 py-2 rounded-lg shadow-sm">
          Puanınız: {calculateScore()}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-700 mb-4 border-b pb-2">A) Çoktan Seçmeli (50 Puan)</h3>
        <div className="space-y-4">
          {mcQuestions.map((q, idx) => (
            <div key={q.id} className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="font-semibold mb-3 flex gap-2">
                <span>{idx + 1}.</span>
                <span>{q.q}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleMcAnswer(q.id, i, q.correct)}
                    disabled={mcAnswers.hasOwnProperty(q.id)}
                    className={`text-left px-4 py-2 rounded border transition ${mcAnswers.hasOwnProperty(q.id)
                      ? i === q.correct
                        ? "bg-green-500 text-white border-green-600"
                        : "opacity-50"
                      : "hover:bg-slate-100 bg-slate-50"
                      }`}
                  >
                    {String.fromCharCode(65 + i)}) {opt}
                  </button>
                ))}
              </div>
              {mcAnswers.hasOwnProperty(q.id) && (
                <div className={`mt-2 text-sm font-bold ${mcAnswers[q.id] ? "text-green-600" : "text-red-600"}`}>
                  {mcAnswers[q.id] ? "Doğru!" : "Yanlış Cevap"}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-700 mb-4 border-b pb-2">B) Doğru / Yanlış (50 Puan)</h3>
        <div className="space-y-3">
          {tfQuestions.map((q, idx) => (
            <div key={q.id} className="bg-white p-3 rounded-lg border shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex gap-2">
                <span className="font-bold text-slate-400">{idx + 1}.</span>
                <span className="font-medium">{q.q}</span>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => handleTfAnswer(q.id, true, q.correct)}
                  disabled={tfAnswers.hasOwnProperty(q.id)}
                  className={`px-4 py-1 rounded font-bold border transition ${tfAnswers.hasOwnProperty(q.id)
                    ? q.correct === true
                      ? "bg-green-100 text-green-700 border-green-300"
                      : "opacity-30"
                    : "hover:bg-green-50 text-green-600 border-green-200"
                    }`}
                >
                  Doğru
                </button>
                <button
                  onClick={() => handleTfAnswer(q.id, false, q.correct)}
                  disabled={tfAnswers.hasOwnProperty(q.id)}
                  className={`px-4 py-1 rounded font-bold border transition ${tfAnswers.hasOwnProperty(q.id)
                    ? q.correct === false
                      ? "bg-green-100 text-green-700 border-green-300"
                      : "opacity-30"
                    : "hover:bg-red-50 text-red-600 border-red-200"
                    }`}
                >
                  Yanlış
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-700 mb-4 border-b pb-2">C) Çalışma Soruları (Puan yok)</h3>
        <div className="space-y-4">
          {openQuestions.map((q) => (
            <div key={q.id} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="font-bold text-blue-900 mb-2">{q.q}</p>
              <button
                onClick={() => toggleOpenAnswer(q.id)}
                className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded hover:bg-blue-300 transition flex items-center gap-1"
              >
                {openAnswerVisibility[q.id] ? "Cevabı Gizle" : "Cevabı Gör"}
              </button>
              {openAnswerVisibility[q.id] && (
                <div className="mt-2 text-sm text-slate-700 bg-white p-3 rounded border border-blue-200 animate-in fade-in slide-in-from-top-1">
                  <strong>Cevap:</strong> {q.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
