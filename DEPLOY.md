# Lovable/AI Studio'ga Deploy Qilish

## Qadam 1: GitHub'ga yuklash

1. GitHub'da yangi repository yarating: https://github.com/new
   - Repository nomi: `ecocash` (yoki istalgan nom)
   - Public yoki Private tanlang
   - "Initialize this repository with a README" ni **o'chiring**

2. Terminal'da quyidagi komandalarni bajaring:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ecocash.git
git push -u origin main
```

(YOUR_USERNAME o'rniga GitHub username'ingizni yozing)

## Qadam 2: AI Studio'da Deploy

1. https://ai.studio/apps/drive/1msSGEqTOZ6Dw6UbHqHWAZuFZSF4b3h8f ga kiring
2. Settings → Deploy yoki Publish bo'limiga o'ting
3. GitHub repository'ni ulang
4. "Deploy" yoki "Publish" tugmasini bosing
5. Bepul domain olasiz (masalan: `ecocash.lovable.app`)

## Yoki: GitHub Desktop orqali

Agar Git CLI o'rnatilmagan bo'lsa:
1. GitHub Desktop'ni yuklab oling: https://desktop.github.com/
2. Repository'ni oching
3. "Publish repository" tugmasini bosing
4. Keyin AI Studio'da deploy qiling

## Environment Variables

Agar Gemini API ishlatilsa, AI Studio'da:
- Settings → Environment Variables
- `GEMINI_API_KEY` qo'shing

