<template>
    <div>
        <a href="#" :class="{'form-help-trigger open':helpOpen, 'form-help-trigger':!helpOpen}" @click.prevent="helpOpen = !helpOpen"><span>Need help?</span></a>
        <aside id="help-1" class="form-help-wrap">
            <div>
                <h1>Help title</h1>
                <p>Elit quo quibusdam qui sunt de aliqua doctrina se proident, ex quem enim multos excepteur de litteris quorum ad tempor reprehenderit.</p>
                <p>Lorem nam cernantur <a href="#">sed amet an quo voluptate</a> fidelissimae te tempor si lorem consequat, legam fabulas coniunctione a culpa praesentibus fabulas quem nescius.</p>
                <ul>
                    <li>Fore commodo expetendis.</li>
                    <li>Lorem nam cernantur sed amet an quo voluptate fidelissimae te tempor si lorem.</li>
                    <li>Legam fabulas coniunctione a culpa praesentibus</li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>

export default {

    data() {
        return {
            helpOpen: false
        }
    }
}
</script>

<style>

</style>
