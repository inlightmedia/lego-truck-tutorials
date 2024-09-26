const stats = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
]

const cardData = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

function App() {
  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted by creators worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consect adipisicing possimus.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(stat => (
                <div key={stat.id} className="bg-gray-3 flex flex-col p-8">
                  <dt className="text-gray-11 text-sm font-semibold leading-6">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div>
              <h3 className="text-base font-semibold leading-6">Last 30 days</h3>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {cardData.map(item => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-lg bg-white py-5 px-4 shadow-md sm:p-6"
                  >
                    <dt className="text-gray-11 truncate text-sm font-medium">{item.name}</dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight">{item.stat}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
