export type NegativeIconProps = {
  type:
    | "confused"
    | "thinking"
    | "worried"
    | "surprised"
    | "glasses"
    | "shocked"
    | "question"
    | "rejected";
  className?: string;
};

export function NegativeIcon({
  type,
  className = "w-60 h-60",
}: NegativeIconProps) {
  // スプライトシートの位置を定義
  const iconPositions = {
    confused: "97% 10%", // 左上
    thinking: "5% 85%", // 左から2番目（上段）
    surprised: "-50% 100%", // 左から3番目（上段）
    worried: "-75% 100%", // 右上
    glasses: "0 -100%", // 左下
    shocked: "-25% -100%", // 左から2番目（下段）
    question: "-50% -100%", // 左から3番目（下段）
    rejected: "-75% -100%", // 右下
  };

  return (
    <div
      className={className}
      style={{
        backgroundImage: "url('/pixta_85587881_L.png')",
        backgroundPosition: iconPositions[type],
        backgroundSize: "400% 200%", // 4x2のグリッド
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
