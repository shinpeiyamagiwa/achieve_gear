import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body

    const formId = "1FAIpQLSdZ_NaHz6XMZuZllOlfWwgokZj84mcWltdi32LghWjgxRGPEw"
    const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`

    // フォームデータの作成
    const formData = new URLSearchParams()
    formData.append("entry.2106438370", name)
    formData.append("entry.196577608", email)

    // Google Formsに送信
    const response = await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      // mode: "no-cors" を削除
      redirect: "follow",
    })

    // レスポンスのステータスコードをチェック
    if (response.status === 200 || response.status === 302) {
      return NextResponse.json({ message: "無料相談のお申し込みを受け付けました。" }, { status: 200 })
    } else {
      throw new Error(`Google Forms returned status: ${response.status}`)
    }
  } catch (error) {
    console.error("送信エラー:", error)
    return NextResponse.json({ message: "エラーが発生しました。後でもう一度お試しください。" }, { status: 500 })
  }
}

