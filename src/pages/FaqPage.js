import React from 'react'
import FAQS from '../constants/faq'
import { Accordion } from '../components/common'

export const FaqPage = () => {
  return (
    <div className="flex flex-col m-10 p-5">
      <h2 className="dark:text-white underline text-2xl text-center mb-8">FAQs</h2>

      <div className="flex flex-col flex-wrap justify-center">
        <div id="accordion-collapse" data-accordion="collapse">
          {FAQS.length && FAQS.map((faq, index) => <Accordion key={index} faq={faq} />)}
        </div>
      </div>
    </div>
  )
}

