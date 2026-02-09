'use client'

interface DistributorData {
  distributorCompanyName: string
  headquarters: string
  geographicalPresence: string
  products: string
  emailAddress: string
  phoneWhatsApp: string
  websiteURL: string
}

// Sample Distributor data
const sampleDistributorData: DistributorData[] = [
  {
    distributorCompanyName: 'xxxxx',
    headquarters: 'xxxxx',
    geographicalPresence: 'xxxxx',
    products: 'xxxxx',
    emailAddress: 'xxxxx',
    phoneWhatsApp: 'xxxxx',
    websiteURL: 'xxxxx'
  },
  {
    distributorCompanyName: 'xxxxx',
    headquarters: 'xxxxx',
    geographicalPresence: 'xxxxx',
    products: 'xxxxx',
    emailAddress: 'xxxxx',
    phoneWhatsApp: 'xxxxx',
    websiteURL: 'xxxxx'
  },
  {
    distributorCompanyName: 'xxxxx',
    headquarters: 'xxxxx',
    geographicalPresence: 'xxxxx',
    products: 'xxxxx',
    emailAddress: 'xxxxx',
    phoneWhatsApp: 'xxxxx',
    websiteURL: 'xxxxx'
  },
  {
    distributorCompanyName: 'xxxxx',
    headquarters: 'xxxxx',
    geographicalPresence: 'xxxxx',
    products: 'xxxxx',
    emailAddress: 'xxxxx',
    phoneWhatsApp: 'xxxxx',
    websiteURL: 'xxxxx'
  },
  {
    distributorCompanyName: 'xxxxx',
    headquarters: 'xxxxx',
    geographicalPresence: 'xxxxx',
    products: 'xxxxx',
    emailAddress: 'xxxxx',
    phoneWhatsApp: 'xxxxx',
    websiteURL: 'xxxxx'
  },
  {
    distributorCompanyName: 'xxxxx',
    headquarters: 'xxxxx',
    geographicalPresence: 'xxxxx',
    products: 'xxxxx',
    emailAddress: 'xxxxx',
    phoneWhatsApp: 'xxxxx',
    websiteURL: 'xxxxx'
  },
  {
    distributorCompanyName: 'xxxxx',
    headquarters: 'xxxxx',
    geographicalPresence: 'xxxxx',
    products: 'xxxxx',
    emailAddress: 'xxxxx',
    phoneWhatsApp: 'xxxxx',
    websiteURL: 'xxxxx'
  }
]

interface CustomerIntelligenceDatabaseProps {
  height?: number
}

export default function CustomerIntelligenceDatabaseWithTabs({ height }: CustomerIntelligenceDatabaseProps) {
  // Distributor Intelligence Table
  const renderDistributorTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#3A7D8F] text-white">
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
              Distributor/Supplier Company
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
              Headquarters
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
              Geographical Presence
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
              Products
            </th>
            <th colSpan={3} className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold bg-[#5FA3B5]">
              Contact Details
            </th>
          </tr>
          <tr className="bg-[#B0E0E6]">
            <th className="border border-gray-300 px-4 py-2"></th>
            <th className="border border-gray-300 px-4 py-2"></th>
            <th className="border border-gray-300 px-4 py-2"></th>
            <th className="border border-gray-300 px-4 py-2"></th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-black">
              Email Address<br />(verified / generic)
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-black">
              Phone / WhatsApp Number
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-black">
              Website URL
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleDistributorData.map((distributor, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-[#E0F7FA]' : 'bg-white'}>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.distributorCompanyName}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.headquarters}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.geographicalPresence}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.products}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.emailAddress}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.phoneWhatsApp}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.websiteURL}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500">
        <p className="text-sm text-black">
          <span className="font-bold">*Kindly Note:</span> This section will cover distributors/suppliers of the specified products in each country included within the scope
        </p>
      </div>
    </div>
  )

  return (
    <div className="w-full" style={height ? { height: `${height}px` } : undefined}>
      <div>
        <h3 className="text-lg font-bold text-black mb-4">Distributor Intelligence Database</h3>
        {renderDistributorTable()}
      </div>
    </div>
  )
}
