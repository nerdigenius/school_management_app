const Announcement = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-sm text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-sky-100 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
                        <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">2020-8-12</span>
                    </div>
                    <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic nihil magnam,
                         est earum quidem, libero minus sint atque officia ipsa </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-purple-100 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
                        <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">2020-8-12</span>
                    </div>
                    <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic nihil magnam,
                         est earum quidem, libero minus sint atque officia ipsa </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-yellow-100 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
                        <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">2020-8-12</span>
                    </div>
                    <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic nihil magnam,
                         est earum quidem, libero minus sint atque officia ipsa </p>
                </div>
            </div>

        </div>
    );
}

export default Announcement;