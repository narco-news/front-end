<template>
	<div>
		<div class="pattern-grid-sm h-screen p-6 md:p-10">
			<div class="contentBox h-full mb-4">
				<table class="table-auto">
					<thead>
						<tr>
							<th class="px-4 py-2">Date</th>
							<th class="px-4 py-2">Incident</th>
							<th class="px-4 py-2">Source</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="date border px-4 py-2">18.07.2020</td>
							<td class="border px-4 py-2">Incident title</td>
							<td class="border px-4 py-2">
								<div class="source">
									<a href="#">[1]</a>
									<a href="#">[2]</a>
									<a href="#">[3]</a>
								</div>
							</td>
						</tr>
						<tr class="bg-gray-100">
							<td class="date border px-4 py-2">
								15.07.2020
							</td>
							<td class="border px-4 py-2">Incident title</td>
							<td class="border px-4 py-2">
								<div class="source">
									<a href="#">[1]</a>
									<a href="#">[2]</a>
									<a href="#">[3]</a>
								</div>
							</td>
						</tr>
						<tr>
							<td class="date border px-4 py-2">13.07.2020</td>
							<td class="border px-4 py-2">Incident title</td>
							<td class="border px-4 py-2">
								<div class="source">
									<a href="#">[1]</a>
									<a href="#">[2]</a>
									<a href="#">[3]</a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contentBox {
	background-color: #f2f2f2;
}
h1 {
	color: #f16b6f;
	margin-top: -40px;
}
.state {
	margin-top: -30px;
}
.source {
	color: #52b5f2;
	font-weight: 700;
	font-family: monospace;
}

.date {
	font-family: monospace;
}
</style>
