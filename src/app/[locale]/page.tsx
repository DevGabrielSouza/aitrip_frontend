import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations()

  return (
    <main className='flex bg-prim min-h-screen flex-col items-center justify-center p-24'>
      <h1>{t('tripPlanner.planYourNextAdventure')}</h1>
    </main>
  )
}
