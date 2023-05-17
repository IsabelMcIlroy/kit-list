import { createSignal } from "solid-js";
import netlifyIdentity from 'netlify-identity-widget';

export default () => {
    const [isLoggedIn, setIsLoggedIn] = createSignal(netlifyIdentity.currentUser() != null);
    netlifyIdentity.on('login', () => setIsLoggedIn(true));
    netlifyIdentity.on('logout', () => setIsLoggedIn(false));
    console.log(netlifyIdentity.currentUser());
    console.log(isLoggedIn())
    return(
    <nav class="flex justify-between px-7 pt-3 pb-4 bg-dark-gray">
        <h1 class="text-3xl font-bold text-main-logo-color text-main-logo-color-fallback flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
          </svg>
          Kit-List
        </h1>
        <Show
            when={isLoggedIn()}
            fallback={<button onClick={()=>{netlifyIdentity.open()}}
            class="bg-action-color py-2 px-4 rounded-full"
            >Login</button>}
          >
            <p>{netlifyIdentity.currentUser()?.user_metadata?.full_name}</p>
            <button onClick={()=>{netlifyIdentity.logout()}}>Logout</button>
          </Show>
    </nav>
  )
  }