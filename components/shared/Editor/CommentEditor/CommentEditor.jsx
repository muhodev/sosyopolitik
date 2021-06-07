import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Button, Avatar } from 'components';

import { extractText } from 'components/shared/Editor';

function CommentEditor(props) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [isActive, setActive] = useState(false);

  const onSubmit = () => props.onSubmit(extractText(editorState));

  const openEditor = () => !isActive && setActive(true);
  const closeEditor = () => setActive(false);
  return (
    <>
      <div className="grid gap-4" style={{ gridTemplateColumns: 'auto 1fr' }}>
        <Avatar />
        <div className="w-full" onClick={openEditor}>
          <Editor
            customStyleMap={{ width: '100%' }}
            placeholder="Yeni yorum ekleyin."
            editorState={editorState}
            onChange={setEditorState}
          />
        </div>
      </div>
      {isActive && (
        <div className="flex justify-end">
          <Button onClick={closeEditor}>İptal</Button>
          <Button onClick={onSubmit} variant="primary">
            Yorum yap
          </Button>
        </div>
      )}
    </>
  );
}

export default CommentEditor;
