import {
  AppLayout,
  Post,
  PostsHeader,
  SuggestProfiles,
  SuggestLists,
  GridColumn,
  Footer,
} from "components";

function Home() {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:mx-36 gap-5">
        <div className="md:col-span-2 grid grid-cols-1 gap-2 my-4">
          <PostsHeader />
          <Post
            title="The Real Conspiracies Are Right In Front Of You"
            description="Based on spending a lot of time working finance, dealing with people who retired early in life."
            author={{
              displayName: "Jessica Wildfire",
              avatar:
                "https://miro.medium.com/fit/c/20/20/2*R5QaBg0eYwqBd31pXSh_qw.jpeg",
            }}
            cover="https://news.codecademy.com/content/images/2020/12/html-interview-practice-questions.png"
            date="Ocak 11"
          />
          <Post
            title="The Real Conspiracies Are Right In Front Of You"
            description="Based on spending a lot of time working finance, dealing with people who retired early in life."
            author={{
              displayName: "Jessica Wildfire",
              avatar:
                "https://miro.medium.com/fit/c/20/20/2*R5QaBg0eYwqBd31pXSh_qw.jpeg",
            }}
            cover="https://miro.com/blog/wp-content/uploads/2020/12/GE-case-study-650x341.png"
            date="Ocak 11"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 gap-2 my-4">
            <SuggestProfiles />
            <Footer />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Home;
