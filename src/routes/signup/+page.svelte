<script lang="ts">
     let Username: string;
     let Password: string;
     let Email: string;
     let ConfirmPassword: string;
</script>


<section class="py-24 lg:py-28 bg-surface-900 h-full w-full overflow-hidden">
     <div class="container px-4 mx-auto">
          <form class="mx-auto max-w-3xl"  action="?/createAccount" method="POST">
               <h2 class="text-6xl tracking-tight font-Satoshi py-10">Create an Account</h2>
               
               <div class="grid grid-flow-row grid-cols-2 grid-rows-2 min-h-fit py-10">
                    <div class="md:w-4/5 w-full py-5 px-1">
                         <input type="text" placeholder="Username" class="rounded-lg outline-none tracking-tight
                         text-gray-700 w-full scale-105" id="Username" name="Username" bind:value={Username}>
                    </div>
                    <div class="md:w-4/5 w-full py-5 px-1">
                         <input type="email" placeholder="Email Address" class="rounded-lg outline-none tracking-tight
                         text-gray-700 w-full scale-105" id="Email" name="Email" bind:value={Email}>
                    </div>
                    <div class="md:w-4/5 w-full py-5 px-1">
                         <input type="password" placeholder="Password" class="rounded-lg outline-none tracking-tight
                         text-gray-700 w-full scale-105" id="Password" name="Password" bind:value={Password}>
                    </div>
                    <div class="md:w-4/5 w-full py-5 px-1">
                         <input type="password" placeholder="Confirm Password" class="rounded-lg outline-none tracking-tight
                         text-gray-700 w-full scale-105" id="ConfirmPassword" name="ConfirmPassword" bind:value={ConfirmPassword}>
                    </div>
                    {#if Password !== ConfirmPassword}
                         <p class="text-red-300">Passwords do not match</p>
                    {/if}
               </div>
               <div class="py-4">
                    <label class="mx-auto  font-Satoshi text-lg"><input type="checkbox" id="agree" class="cursor-pointer"> I agree to
                    the Terms & Conditions and Privacy Policy.</label>
               </div>
               <div class="py-3 w-full">
                    <button type="submit" class="w-[90%] bg-secondary-500 hover:bg-secondary-700 rounded-lg font-bold inline-block px-5
                    py-4 mb-7"
                    >Create Account</button>
                    <p>Already have an account? <a href="/login" class="text-tertiary-400 hover:underline">Sign In</a></p>
               </div>

          </form>

     </div>
</section>
