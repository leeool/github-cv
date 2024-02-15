// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    interface PageState {
      newCv?: {
        openModal?: boolean
        error?: string
        selectedUserId?: number
      }
    }
    // interface Platform {}
  }
}

export { };
