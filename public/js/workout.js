const addWorkoutHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#Title').value.trim();
  const description = document.querySelector('#Description').value.trim();
  const id = event.target.getAttribute('data-id');

  if (title && description) {
    const response = await fetch('/api/workout/add', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/userWorkouts/${id}`);
    } else {
      alert(response.statusText);
    }
  }
};

if (document.querySelector('#new-workout-button')) {
  document
    .querySelector('#new-workout-button')
    .addEventListener('click', addWorkoutHandler);
}


const deleteWorkoutHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    console.log('hello');
    const id = event.target.getAttribute('data-id');

    const response = await fetch('/api/workout/delete/'+id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

if ($('.deleteWorkout')) {
  $('.deleteWorkout').on('click', deleteWorkoutHandler);
}