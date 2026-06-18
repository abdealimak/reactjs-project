import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How fast is the AI Tariff Classifier?",
    answer: "Our system identifies and categorizes exact tax duty rates in milliseconds using predictive autocomplete on international HS codes."
  },
  {
    question: "Can I undo mistakes in the manifest?",
    answer: "Yes. The Immutable Manifest Audit Trail tracks every edit in real-time, allowing you to revert human errors instantly with a secure, one-click rollback."
  },
  {
    question: "Does Odyssey integrate with our existing border gates?",
    answer: "Absolutely. Odyssey acts as a layer over your existing infrastructure, offering a Global Checkpoint Status Hub to monitor all connected regional border gates on a unified map."
  },
  {
    question: "How does the Security Registry prevent fraud?",
    answer: "It automatically cross-examines digital Bills of Lading against global shipping registers, instantly triggering alerts for weight discrepancies or unauthorized signatures."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Frequently Asked Questions</h2>
          <p>Get quick answers to the most common questions about the Odyssey platform.</p>
        </div>

        <div className="faq-list reveal">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <article 
                className={`faq-item ${isOpen ? 'open' : ''}`} 
                key={index}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown className="faq-icon" size={20} />
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
