import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Menu } from "lucide-react";
import {
  NegativeIcon,
  type NegativeIconProps,
} from "@/components/NegativeIcon";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="text-2xl font-bold text-orange-500">
                AchieveGear
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a
                href="#features"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                特徴
              </a>
              <a
                href="#testimonials"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                お客様の声
              </a>
              <a
                href="#pricing"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                料金プラン
              </a>
              <a
                href="#faq"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                よくある質問
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Button
                className="bg-orange-500 hover:bg-orange-600 ml-8 whitespace-nowrap"
                asChild
              >
                <a href="/consultation">無料相談</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="relative h-[700px]">
          {/* ヒーローセクションの背景画像部分を修正 */}
          <img
            src="pixta_85808238_L.png"
            alt="プロフェッショナルビジネスチーム"
            className="absolute inset-0 w-full h-[700px] object-contain object-[110%_center]"
          />
          {/* 全体にグラデーションオーバーレイを適用 */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/75 mix-blend-multiply" />

          {/* コンテンツ部分により良い配置と余白を追加 */}
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">目標達成ができない</span>
              <span className="block mt-2">あなたへ</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-orange-100 sm:max-w-3xl">
              AchieveGearの専任サポーターがあなたの目標達成をサポートします。
              実績豊富な専門家による的確なアドバイスで、成長への近道を見つけましょう。
            </p>
            <div className="mt-10">
              <Button
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="/consultation">
                  無料相談を予約する
                  <ArrowRight
                    className="ml-2 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* 悩みセクション */}
        {/* <div className="bg-orange-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              こんな悩みはありませんか？
            </h2>
            <ul className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {[
                {
                  icon: "thinking",
                  text: "たてた目標を達成できない",
                },
                {
                  icon: "confused",
                  text: "継続することがなかなかできない",
                },
                {
                  icon: "worried",
                  text: "目標に向かって一歩を踏み出せない",
                },
              ].map((concern, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <NegativeIcon
                    type={concern.icon as NegativeIconProps["type"]}
                    className="w-40 h-40 mb-4"
                  />
                  <p className="text-base text-gray-700">{concern.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div> */}

        {/* 原因セクション */}
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              なぜ目標達成できないのか？
            </h2>
            <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8">
              {[
                {
                  title: "明確な計画がない",
                  description:
                    "具体的なアクションプランや達成までのロードマップが不明確なため、何から始めればよいかわからない状態になっています。",
                },
                {
                  title: "適切なフィードバックがない",
                  description:
                    "進捗状況を客観的に評価し、必要な軌道修正をアドバイスしてくれる人がいないため、同じ失敗を繰り返してしまいます。",
                },
                {
                  title: "モチベーション維持が難しい",
                  description:
                    "一人では継続的なモチベーション維持が難しく、途中で挫折してしまいがちです。",
                },
              ].map((reason) => (
                <div key={reason.title} className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-base text-gray-500">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
                サポート内容
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                専任サポーターによる確実な目標達成
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                AchieveGearは、あなたの目標達成を全力でサポートします。
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: "専属によるサポート",
                    description:
                      "経験豊富な専属サポートメンバーが、あなたの目標達成をきめ細かくサポートします。",
                  },
                  {
                    name: "パーソナライズされた戦略立案",
                    description:
                      "あなたの強みと課題を分析し、最適な目標達成戦略を一緒に作成します。",
                  },
                  {
                    name: "定期的な進捗管理",
                    description:
                      "週次のチェックインで進捗を確認し、必要に応じて戦略を調整します。",
                  },
                  {
                    name: "24時間サポート体制",
                    description:
                      "目標達成に関する質問や悩みを、いつでもサポートチームに相談できます。",
                  },
                ].map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                        <CheckCircle className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="bg-gray-100 py-16 lg:py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                お客様の声
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                AchieveGearを使って人生を変えた方々の声をご紹介します。
              </p>
            </div>
            <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
              {[
                {
                  role: "起業家",
                  content:
                    "AchieveGearの専任サポーターのおかげで、6ヶ月以内に起業することができました。的確なアドバイスと進捗管理が本当に役立ちました！",
                },
                {
                  role: "主婦",
                  content:
                    "AchieveGearのサポートで、長年できなかったダイエットに成功しました。専任サポーターの励ましと的確なアドバイスが、モチベーション維持に大きく貢献しました。",
                },
                {
                  role: "自営業",
                  content:
                    "一緒にいい方法を調べて伴奏者として目標管理していただき、フルマラソンで4時間を切ることができました。",
                },
                {
                  role: "会社員",
                  content:
                    "AchieveGearのおかげで、早起きして英語の勉強を習慣化することができました。その結果、TOEIC850点を達成できました。目標設定から習慣化まで、段階的にサポートしてもらえて本当に良かったです。",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-orange-500">
                        <span className="text-gray-500">
                          {testimonial.role}
                        </span>
                      </p>
                      <div className="mt-3">
                        <p className="text-base text-gray-500">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                シンプルな料金プラン
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                月額10,000円で、継続できる自分になれます。
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto">
              <div className="rounded-lg shadow-sm divide-y divide-gray-200">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    AchieveGearプレミアムプラン
                  </h3>
                  <p className="mt-4 text-3xl font-extrabold text-gray-900">
                    10,000円{" "}
                    <span className="text-base font-medium text-gray-500">
                      / 月
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    *年間契約の場合、2ヶ月分無料
                  </p>
                  <Button
                    className="mt-8 block w-full bg-orange-500 text-white"
                    asChild
                  >
                    <a href="/consultation">無料相談を予約する</a>
                  </Button>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                    含まれるサービス
                  </h4>
                  <ul className="mt-6 space-y-4">
                    {[
                      "専任サポーターによる個別サポート",
                      "パーソナライズされた目標達成戦略",
                      "週次の進捗確認と調整",
                      "24時間サポートチーム",
                      "オンラインツールへのアクセス",
                    ].map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckCircle
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              よくある質問
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "AchieveGearはどのように機能しますか？",
                  answer:
                    "AchieveGearでは、まず専任サポーターがあなたと面談し、目標と現状を詳しく分析します。その後、あなたにあった目標達成戦略を一緒に作成し、定期的な進捗確認と戦略調整を行いながら、目標達成までサポートします。",
                },
                {
                  question: "週次の進捗確認はどのように行われますか？",
                  answer:
                    "希望によりますが、週次の進捗確認は、オンラインビデオ通話または電話で行われます。前週の進捗を確認し、次週の計画を立てます。必要に応じて戦略の微調整も行います。",
                },
                {
                  question: "契約期間の縛りはありますか？",
                  answer:
                    "基本的に契約期間の縛りはありません。ただし、年間契約を選択すると2ヶ月分の料金が無料になるお得なプランもご用意しています。目標達成までじっくりサポートさせていただくため、最低3ヶ月のご利用をおすすめしています。",
                },
              ].map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white shadow overflow-hidden rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <div className="mt-2 text-base text-gray-500">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-orange-600">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">あなたの目標を確実な達成へ</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-orange-200">
              AchieveGearの専任サポーターがあなたの目標達成をサポートします。
            </p>
            <Button
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white hover:bg-gray-50 sm:w-auto"
              asChild
            >
              <a href="/consultation">
                無料相談を予約する
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800"></footer>
    </div>
  );
}
