import {
  AppLayout,
  Post,
  PostsHeader,
  SuggestProfiles,
  SuggestLists,
  GridColumn,
} from "components";

function Home() {
  return (
    <AppLayout>
      <div>
        <GridColumn>
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
        </GridColumn>
      </div>
      <div>
        <GridColumn>
          <SuggestProfiles />
          <SuggestLists />
        </GridColumn>
      </div>
    </AppLayout>
  );
}

export default Home;
