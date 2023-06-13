import { BsCheck, BsCurrencyDollar } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex sm:h-screen justify-center">
      <div className="w-[40rem] mx-auto my-4">
        <div className="flex flex-wrap">
          <div className="lg:w-1/4 sm:w-1/2 w-full my-8 px-4 sm:px-0 hidden sm:block">
            <h2 className="font-semibold pb-4 mb-2 sm:text-left border-b">
              Feature
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-gray-600">
              <ul className="list-none space-y-2">
                <li>Application</li>
                <li>Leads</li>
                <li>Events</li>
                <li>Commission</li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full my-8 px-4 sm:px-0">
            <h2 className="font-semibold pb-4 mb-2 sm:text-left border-b">
              Partner
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-gray-600">
              <ul className="list-none space-y-2">
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Application</span>
                  <BsCheck
                    className="text-green-500"
                    size={"1.4rem"}
                  />
                </li>
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Leads</span>
                  <p className="font-semibold sm:ml-2 mr-2">-</p>
                </li>
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Events</span>
                  <p className="font-semibold sm:ml-2 mr-2">-</p>
                </li>
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Commission</span>
                  <div className="flex">
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                  </div>
                </li>
              </ul>
              <button className="text-white text-sm bg-blue-500 py-2 px-4 mt-4 rounded">
                Sign Up Now
              </button>
            </nav>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full my-8 px-4 sm:px-0">
            <h2 className="font-semibold pb-4 mb-2 sm:text-left border-b">
              Pro Partner
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-gray-600">
              <ul className="list-none space-y-2">
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Application</span>
                  <BsCheck
                    className="text-green-500"
                    size={"1.4rem"}
                  />
                </li>
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Leads</span>
                  <BsCheck
                    className="text-green-500"
                    size={"1.4rem"}
                  />
                </li>
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Events</span>
                  <p className="font-semibold sm:ml-2 mr-2">-</p>
                </li>
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Commission</span>
                  <div className="flex">
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                  </div>
                </li>
              </ul>
              <button className="text-white text-sm bg-blue-500 py-2 px-4 mt-4 rounded">
                Sign Up Now
              </button>
            </nav>
          </div>
          <div className="lg:w-1/4 sm:w-1/2 w-full my-8 px-4 sm:px-0">
            <h2 className="font-semibold pb-4 mb-2 sm:text-left border-b">
              Franchise
            </h2>
            <nav className="flex flex-col justify-start sm:items-start sm:text-left text-gray-600">
              <ul className="list-none space-y-2">
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Application</span>
                  <BsCheck
                    className="text-green-500"
                    size={"1.4rem"}
                  />
                </li>
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Leads</span>
                  <BsCheck
                    className="text-green-500"
                    size={"1.4rem"}
                  />
                </li>
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Events</span>
                  <BsCheck
                    className="text-green-500"
                    size={"1.4rem"}
                  />
                </li>
                <li className="flex sm:flex-col justify-between">
                  <span className="block sm:hidden">Commission</span>
                  <div className="flex justify-end">
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                    <BsCurrencyDollar
                      className="text-orange-500"
                      size={"1.2rem"}
                    />
                  </div>
                </li>
              </ul>
              <button className="text-white text-sm bg-green-600 py-2 px-4 mt-4 rounded">
                Request
              </button>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
