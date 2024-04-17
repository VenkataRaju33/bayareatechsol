export async function fetchPrompts() {
  try {
    const response = await fetch("https://demo6396395.mockable.io/prompts");
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export async function fetchBoards() {
  try {
    const response = await fetch("https://demo6396395.mockable.io/bcf-boards");
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}
