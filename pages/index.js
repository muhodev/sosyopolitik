import {
  Posts,
  PostsTitleWidget,
  Profiles,
  Footer,
  HomeTopFeeds
} from 'components';

const fakeTopPosts = [
  {
    title: 'Ozan Elektronik Para, UnionPay International üyesi oldu',

    tags: [],
    author: {
      displayName: 'SpGündem'
    },
    cover:
      'https://static01.nyt.com/images/2021/05/03/world/00afghan-withdrawal-top/00afghan-withdrawal-top-threeByTwoMediumAt2X-v2.jpg?format=pjpg&quality=75&auto=webp&disable=upscale'
  },
  {
    title: 'Ozan Elektronik Para, UnionPay International üyesi oldu',

    tags: [],
    author: {
      displayName: 'SpGündem'
    },
    cover:
      'https://static01.nyt.com/images/2021/05/03/us/politics/03dc-bar/merlin_186812604_6d0aa88e-eac9-4b9a-b4a3-c667b89f0b87-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale'
  },
  {
    title: 'Ozan Elektronik Para, UnionPay International üyesi oldu',

    tags: [],
    author: {
      displayName: 'SpGündem'
    },
    cover:
      'https://static01.nyt.com/images/2021/04/22/multimedia/00IHW-childfree-image2/00IHW-childfree-image2-threeByTwoMediumAt2X-v4.jpg?format=pjpg&quality=75&auto=webp&disable=upscale'
  },
  {
    title: 'Ozan Elektronik Para, UnionPay International üyesi oldu',

    tags: [],
    author: {
      displayName: 'SpGündem'
    },
    cover:
      'https://static01.nyt.com/images/2021/04/26/multimedia/26sp-resilience-pets/26sp-resilience-pets-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale'
  }
];

export default function Home() {
  return (
    <>
      <HomeTopFeeds posts={fakeTopPosts} />
      <div className="w-full flex justify-center">
        <div className="w-9/12 my-5">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <Posts
                data={[
                  {
                    title:
                      "Geekday2021 3 Nisan Saat 15:00'deki seminer için sunum hazırlıyorum.",
                    description: `Dotnet Konferansı 2021'de Bora Kaşmer'in yaptığı "Develop .NET Core Apps with Modern Tools" sunumuna ait video Youtube kanalımızda yayında.`,
                    date: '29 Mar',
                    cover:
                      'https://pbs.twimg.com/media/ExlsK0vXIAM7bZl?format=jpg&name=medium',
                    author: {
                      username: 'CoderBora',
                      displayName: 'Bora Kaşmer',
                      avatar:
                        'https://pbs.twimg.com/profile_images/1372709782726000649/dCJN5x8m_400x400.jpg'
                    }
                  },
                  {
                    title:
                      'JavaScript Conditional Statements: if, if else, if else if, switch case',
                    description:
                      "n this latest post, we will discuss what are conditional statements in JavaScript. These statements are a bit confusing when coding, we'll learn this",
                    date: '29 Mar',
                    cover:
                      'https://cdn.hashnode.com/res/hashnode/image/upload/v1616987078951/pe3eihPkM.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress',
                    author: {
                      username: 'rahul',
                      displayName: 'Rahul',
                      avatar:
                        'https://cdn.hashnode.com/res/hashnode/image/upload/v1614088995004/pks4YkMiY.png?w=400&h=400&fit=crop&crop=faces&auto=compress'
                    }
                  },
                  {
                    title: 'Top Node.js Frameworks to use in 2021',
                    description:
                      'Node.js is one of the fastest server-side web application platforms as it provides app development companies',
                    date: '29 Mar',
                    cover:
                      'https://miro.medium.com/max/700/1*9lmHM-CypCHEOtNd_dfRRw.png',
                    author: {
                      username: 'ronak',
                      displayName: 'Ronak Patel',
                      avatar:
                        'https://miro.medium.com/fit/c/96/96/1*rPmLkw5KVdRgnrAbFZfS8A.jpeg'
                    }
                  }
                ]}
              />
            </div>
            <div>
              <div className="grid gap-3">
                <div>
                  <Profiles
                    data={[
                      {
                        username: 'rahul',
                        displayName: 'Rahul',
                        avatar:
                          'https://cdn.hashnode.com/res/hashnode/image/upload/v1614088995004/pks4YkMiY.png?w=400&h=400&fit=crop&crop=faces&auto=compress'
                      },
                      {
                        username: 'ronak',
                        displayName: 'Ronak Patel',
                        avatar:
                          'https://miro.medium.com/fit/c/96/96/1*rPmLkw5KVdRgnrAbFZfS8A.jpeg'
                      },
                      {
                        username: 'CoderBora',
                        displayName: 'Bora Kaşmer',
                        avatar:
                          'https://pbs.twimg.com/profile_images/1372709782726000649/dCJN5x8m_400x400.jpg'
                      }
                    ]}
                  />
                </div>
                <div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
