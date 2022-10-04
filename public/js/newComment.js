const addCommentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#content');
    const id = document.querySelector('#post-id');

    const response = await fetch('/api/comment/' + id.value, {
      method: 'POST',
      body: JSON.stringify({          
          content:content.value.trim(),
      }),
      headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
      document.location.replace('');
    } else {
      alert('Failed to comment');
    }

};

document
    .querySelector('#frmComment')
        .addEventListener('submit', addCommentFormHandler);