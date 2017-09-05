<template>
	<md-list>
		<md-list-item v-for="place in places">
			<md-icon>local_dining</md-icon>
			<span>{{ place.name }}</span>

			<md-list-expand>

				<md-list-item v-for="meal in place.meals">
					<md-icon></md-icon>
					<span>{{ meal.name }}</span>
				</md-list-item>

			</md-list-expand>
		</md-list-item>

	</md-list>
</template>

<script>
    export default {
        computed: {
            places() {
                return this.$store.state.places;
			}
		}
    }
</script>
