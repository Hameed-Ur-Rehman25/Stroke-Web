export default function ComplianceSection() {
  return (
    <section className="px-6 max-w-6xl mx-auto text-center">
      <div className="flex justify-center gap-12">
        <div className="flex flex-col items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-15%20at%2012.37.23%20AM-xX3piRaL53kJ8mO07G9IEr5E9MBz82.png"
            alt="HIPAA Compliant"
            className="h-16 w-auto"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-15%20at%2012.37.23%20AM-xX3piRaL53kJ8mO07G9IEr5E9MBz82.png"
            alt="GDPR Compliant"
            className="h-16 w-auto"
          />
        </div>
      </div>
      <p className="mt-6 text-gray-700">
        Please Note! Your data is confidential and secured by HIPAA and GDPR standards.
      </p>
    </section>
  )
}
