"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ConsultationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")

    try {
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "送信に失敗しました。後でもう一度お試しください。")
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "予期せぬエラーが発生しました。")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">お申し込みありがとうございます</h2>
            <p className="text-gray-600 mb-8">
              無料相談のお申し込みを受け付けました。
              <br />
              担当者より2営業日以内にご連絡させていただきます。
            </p>
            <Button asChild>
              <Link href="/" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                トップページに戻る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">無料相談のお申し込み</h2>
        <p className="mt-2 text-center text-sm text-gray-600">専属コンサルタントがあなたの目標達成をサポートします。</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            <div>
              <Label htmlFor="name">お名前</Label>
              <div className="mt-1">
                <Input id="name" name="name" type="text" required className="w-full" disabled={isLoading} />
              </div>
            </div>

            <div>
              <Label htmlFor="email">メールアドレス</Label>
              <div className="mt-1">
                <Input id="email" name="email" type="email" required className="w-full" disabled={isLoading} />
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isLoading}>
                {isLoading ? "送信中..." : "送信する"}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/" className="inline-flex items-center justify-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                トップページに戻る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

