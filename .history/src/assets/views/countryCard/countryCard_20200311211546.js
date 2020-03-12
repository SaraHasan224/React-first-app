import React from 'react';
import  './countryCard.scss'
function countryCard(props)
{
    return (
        <div class="row">
	<div class="col-md-3 col-sm-6">
		<figure class="card card-product-grid">
			<div class="img-wrap"> 
				<img src="bootstrap-ecommerce-html/images/items/3.jpg"> </div>
			<figcaption class="info-wrap border-top">
				<a href="#" class="title">The north face shorts</a>
				<div class="price mt-2">$299.00</div> <!-- price-wrap.// -->
			</figcaption>
		</figure> <!-- card // -->
	</div> <!-- col.// -->
	<div class="col-md-3 col-sm-6">
		<figure class="card card-product-grid">
			<div class="img-wrap">
				<img src="bootstrap-ecommerce-html/images/items/5.jpg">
				<span class="topbar">
					<a href="#" class="float-right"><i class="fa fa-heart"></i></a>
				</span>
				<a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
			</div>
			<figcaption class="info-wrap border-top">
				<a href="#" class="title">Leather Sleeve - Macbook 13’’</a>
				<div class="price mt-2">$3753.00</div> <!-- price-wrap.// -->
			</figcaption>
		</figure> <!-- card // -->
	</div> <!-- col.// -->
	<div class="col-md-3 col-sm-6">
		<figure class="card card-product-grid">
			<div class="img-wrap">
				<span class="topbar">
					<span class="badge badge-success"> NEW </span>
				</span>
				<img src="bootstrap-ecommerce-html/images/items/1.jpg">
			</div>
			<figcaption class="info-wrap border-top">
				<a href="#" class="title">H&amp;M Polo Shirt Slim Fit</a>
					<div class="price-wrap mt-2">
						<span class="price">$12.99</span>
						<small class="price-old">$14.99</small>
					</div> <!-- price-wrap.// -->
			</figcaption>
		</figure> <!-- card // -->
	</div> <!-- col.// -->
	<div class="col-md-3 col-sm-6">
		<figure class="card card-product-grid">
			<div class="img-wrap">
				<img src="bootstrap-ecommerce-html/images/items/6.jpg">
			</div>
			<figcaption class="info-wrap border-top text-center">
				<small class="text-uppercase font-weight-bolder text-warning">Interiors</small>
				<p><a href="#" class="title">IKEA Poäng Swivel Chair</a></p>
			</figcaption>
		</figure> <!-- card // -->
	</div> <!-- col.// -->
</div>
    )
}

export default countryCard