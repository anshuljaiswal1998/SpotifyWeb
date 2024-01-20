import { Icon } from '@iconify/react';
import mainLogo from '../assets/images/spotify-logo-white.png';
import IconText from '../components/shared/IconText';
import TextWithHover from '../components/shared/TextWithHover';

const sampleCardData = [{
    "title": "Peaceful Piano",
    "description": "Relax and indulge with peaceful piano pieces",
    "imageUrl": "https://www.kmmc.in/kmmc/uploads/2023/09/child-pianist-practicing-playing-close-up-chord-skill-generated-by-ai.jpg"
},
{
    "title": "Relaxing Piano",
    "description": "Relax and indulge with peaceful piano pieces",
    "imageUrl": "https://www.kmmc.in/kmmc/uploads/2023/09/child-pianist-practicing-playing-close-up-chord-skill-generated-by-ai.jpg"
},
{
    "title": "Peaceful Piano",
    "description": "Relax and indulge with peaceful piano pieces",
    "imageUrl": "https://www.kmmc.in/kmmc/uploads/2023/09/child-pianist-practicing-playing-close-up-chord-skill-generated-by-ai.jpg"
},
{
    "title": "Peaceful Piano",
    "description": "Relax and indulge with peaceful piano pieces",
    "imageUrl": "https://www.kmmc.in/kmmc/uploads/2023/09/child-pianist-practicing-playing-close-up-chord-skill-generated-by-ai.jpg"
},
{
    "title": "Peaceful Piano",
    "description": "Relax and indulge with peaceful piano pieces",
    "imageUrl": "https://www.kmmc.in/kmmc/uploads/2023/09/child-pianist-practicing-playing-close-up-chord-skill-generated-by-ai.jpg"
}];

const Home = () => {
    return (
        <div className="flex w-full h-full">
            {/* Side Panel */}
            <div className="w-1/6 bg-black flex flex-col justify-between pb-10">
                <div>
                    <div className='logoDiv px-2 py-10'>
                        <img src={mainLogo} alt="logo" srcset="" width='130' />
                    </div>
                    <div>
                        <IconText iconName="majesticons:home" displayName="Home" isActive />
                        <IconText iconName="bi:search" displayName="Search" />
                        <IconText iconName="fluent:library-28-regular" displayName="Your Library" />
                    </div>
                    <div className='pt-6'>
                        <IconText iconName="basil:add-solid" displayName="Create Playlist" />
                        <IconText iconName="mdi:heart" displayName="Liked Songs" />
                    </div>
                </div>
                {/* Language button */}
                <div className='language px-5'>
                    <div className='border-white border rounded-full flex justify-center items-center w-3/5 px-1 py-1 cursor-pointer hover:text-white'>
                        <Icon icon={'ion:globe-outline'} color='white'></Icon>
                        <div className='text-gray-400 font-semibold px-2'>
                            English
                        </div>
                    </div>
                </div>
            </div>

            {/* Nav Bar and Content */}
            <div className='w-5/6 h-full bg-app-black overflow-auto'>
                {/* Navbar */}
                <div className='navbar flex w-full h-1/10 bg-black bg-opacity-20 text-white items-center  justify-end'>
                    <div className='w-1/2 flex h-full'>
                        <div className='w-3/5 flex items-center justify-around'>
                            <TextWithHover displayName="Premium"></TextWithHover>
                            <TextWithHover displayName="Support"></TextWithHover>
                            <TextWithHover displayName="Download"></TextWithHover>
                        </div>
                        <div className='w-2/5 flex items-center justify-around'>
                            <div className='seperator border-r h-1/2 flex justify-center items-center border-white'>
                            </div>
                            <TextWithHover displayName="Sign up"></TextWithHover>
                            <div className='login px-8 h-2/3 bg-white text-black flex items-center justify-center rounded-full cursor-pointer font-semibold'>
                                Log in
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className='content h-9/10 p-8'>
                    <PlaylistView playlistTitle="Focus" cardsData={sampleCardData} />
                    <PlaylistView playlistTitle="Spotify Playlist" cardsData={sampleCardData} />
                    <PlaylistView playlistTitle="Sound of India" cardsData={sampleCardData} />
                    {/* <PlaylistView playlistTitle="Spotify Playlist" />
                    <PlaylistView playlistTitle="Sound of India" /> */}
                </div>

            </div>

        </div>
    )
}

const PlaylistView = ({ playlistTitle, cardsData }) => {
    return (
        <div className='w-full text-white'>
            <div className='title font-semibold text-xl mb-5 '>
                {playlistTitle}
            </div>

            <div className='flex w-full justify-between mb-8 space-x-3'>
                {cardsData.map((item) => {
                    return (
                        <Cards title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl} />
                    );
                })
                }
            </div>
        </div>
    )
}

const Cards = (props) => {
    return (
        <div className='w-1/5 px-4 bg-black bg-opacity-30 rounded-lg'>
            <div className='p-4'>
                <img src={props.imageUrl} alt="label" />
            </div>
            <div className='py-2 font-semibold font-m'>
                {props.title}
            </div>
            <div className='py-2 text-gray-500 font-semibold text-xs'>
                {props.description}
            </div>
        </div>
    )
}

export default Home;