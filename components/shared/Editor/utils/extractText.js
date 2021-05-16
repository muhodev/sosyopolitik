import { convertToRaw } from 'draft-js';

export const extractText = state => {
  let text = '';
  const currentData = convertToRaw(state.getCurrentContent());

  const blocks = currentData?.blocks;
  if (blocks) {
    blocks.forEach((block, index) => {
      let blockText = block.text;

      if (blocks.length !== index + 1) {
        // son block olduğunda \n ifadesi eklenmeyecek.
        blockText += '\n';
      }

      if (blockText === '') {
        text += '\n';
      } else {
        text += blockText;
      }
    });
  }
  return text;
};
