import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../redux/comments/commentSlice";
import "../../assets/styles/components/addComment.scss";

const AddComment = ({ postId, onCommentAdded }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.comments);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    const formData = new FormData();
    formData.append("postId", postId);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    const result = await dispatch(createComment(formData));

    if (createComment.fulfilled.match(result)) {
      setContent("");
      setImage(null);
      onCommentAdded(); // actualiza el post en el componente padre
    }
  };

  return (
    <div className="add-comment-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h4>Agregar comentario</h4>
        {error && <p className="error-message">{error}</p>}

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe tu comentario..."
          rows={4}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar comentario"}
        </button>
      </form>
    </div>
  );
};

export default AddComment;
