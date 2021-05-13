import {
  Posts,
  PostsTitleWidget,
  Profiles,
  Footer,
  HomeTopFeeds
} from 'components';

export default function Home() {
  return (
    <>
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
