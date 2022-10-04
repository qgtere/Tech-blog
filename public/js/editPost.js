const editPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title');
    const content = document.querySelector('#content');
    const id = document.querySelector('#post-id');

    const response = await fetch('/api/post/' + id.value, {
      method: 'PUT',
      body: JSON.stringify({
          title: title.value.trim(),
          content:content.value.trim(),
      }),
      headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to edit post');
    }

};

document
    .querySelector('#frmEditPost')
        .addEventListener('submit', editPostFormHandler);