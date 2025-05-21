const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-lamaSkyLight rounded-md p-4">
                <div className="flex center-items justify-between">
                    <h2 className="font-medium">Make sure to carry your Docket before entering the exam room.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md">20/05/25</span>
                </div>
                 <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sequi in a atque velit</p>
            </div>
           
        </div>

         <div className="flex flex-col gap-4 mt-4">
            <div className="bg-lamaYellowLight rounded-md p-4">
                <div className="flex center-items justify-between">
                    <h2 className="font-medium">Kindly note that Exams will start next week.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md">20/05/25</span>
                </div>
                 <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sequi in a atque velit</p>
            </div>
           
        </div>

         <div className="flex flex-col gap-4 mt-4">
            <div className="bg-lamaSkyLight rounded-md p-4">
                <div className="flex center-items justify-between">
                    <h2 className="font-medium">Hello New Students, we welcome you All.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md">20/05/25</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sequi in a atque velit</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default Announcements