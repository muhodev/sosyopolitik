function Post(props) {
  return (
    <article className="s-post">
      <div className="s-post__content">
        <div className="s-post__title">{props.title}</div>
        <div className="s-post__meta">
          <div className="s-post__author">
            <div className="s-post__author--avatar">
              <img src={props.author.avatar} />
            </div>
            <div className="s-post__author--name t-caption-10">
              {props.author.displayName}
            </div>
          </div>
          <div className="s-post__date t-caption-20">{props.date}</div>
        </div>
        <div className="s-post__description">{props.description}</div>
      </div>
      <div className="s-post__cover">
        <img src={props.cover} />
      </div>
    </article>
  );
}

export default Post;
