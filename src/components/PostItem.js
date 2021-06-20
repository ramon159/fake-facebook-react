import React from 'react';

function PostHeader({author, date}) {
  return (
    <div className="post-header">
        <img className="avatar" src={author.avatar}/>

        <div className="post-info">
          <span className="author-name">{author.name}</span>
          <span className="date">{date}</span>
        </div>
    </div>
  )
}

function PostComments({comments}) {
  return (
    <div className="post-comments">
      <hr className="divider"></hr>
      {comments.map(comment => (

        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar}/>

          <div className="box-comment">
            <span className="author-name">{comment.author.name}</span>
            <div className="text-comment">
              <div>{comment.content}</div>
            </div>
          </div>

        </div>
        // author: {
        //       name: "Diego Fernandes",
        //       avatar: "http://url-da-imagem.com/imagem.jpg"
        //     },
        //     content: "Conteúdo do comentário"
        )
      )}
    </div>
  )
}


function PostItem({author, date, content, comments}) {
  console.log(typeof author)
  return (
    <div className="post">
      <PostHeader author={author} date={date}/>
      <p>{content}</p>
      <PostComments comments={comments}/>
    </div>
  );
};

export default PostItem;