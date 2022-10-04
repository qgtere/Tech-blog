const newPostFormHandler = async (event) => {
      event.preventDefault();

      const title = document.querySelector('#title');
      const content = document.querySelector('#content');

      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value.trim(),
            content:content.value.trim(),
        }),
        headers: {'Content-Type': 'application/json'}
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to post');
      }
};

  document
  .querySelector('#frmNewPost')
    .addEventListener('submit', newPostFormHandler);