import { BreadcrumbWithCustomSeparator } from '@/components/BreadcrumbWithCustomSeparator'
import { InputForm } from '@/components/InputForm'
import React from 'react'

const ContactPage = () => {
  return (
    <main className='flex flex-col gap-12'>
      <section className="flex flex-col items-center bg-gray-100 p-24 dark:bg-gray-950">
        <h1 className="text-5xl pt-24 font-bold mb-3">Contact</h1>
        <BreadcrumbWithCustomSeparator text="Contact" />
      </section>

      <section className='flex flex-col items-center'>
        <InputForm />
      </section>
    </main>
  )
}

export default ContactPage