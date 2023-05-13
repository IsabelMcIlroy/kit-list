import { createSignal } from "solid-js";
import netlifyIdentity from 'netlify-identity-widget';

export default () => {
    const [isLoggedIn, setIsLoggedIn] = createSignal(netlifyIdentity.currentUser() != null);
    netlifyIdentity.on('login', () => setIsLoggedIn(true));
    netlifyIdentity.on('logout', () => setIsLoggedIn(false));
    console.log(netlifyIdentity.currentUser());
    console.log(isLoggedIn())
    return(
    <nav class="flex justify-between px-7 pt-3 pb-4 bg-slate-300">
        <h1 class="text-3xl font-bold underline text-main-purple text-main-purple-fallback">Kit-List</h1>
        <Show
            when={isLoggedIn()}
            fallback={<button onClick={()=>{netlifyIdentity.open()}}>Login</button>}
          >
            <p>{netlifyIdentity.currentUser()?.user_metadata?.full_name}</p>
            <button onClick={()=>{netlifyIdentity.logout()}}>Logout</button>
          </Show>
    </nav>
  )
  }