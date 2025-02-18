import React, { useState } from 'react';
import Modal from 'react-modal';
import { ReactPhotoCollage } from 'react-photo-collage';
import { getCollageImageUrls } from '../lib/products';

type Props = {
	product: IProduct;
	showModal: boolean;
	closeModal: () => void;
};

const modalStyle: Modal.Styles = {
	content: {
		zIndex: 1,
		position: 'absolute',
		height: '85vh',
		width: '90vw',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'white',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
};

const ProductModal: React.FC<Props> = ({ product, showModal, closeModal }) => {
	if (!product) return <></>;

	const photos = getCollageImageUrls(product);

	const collageSetting = {
		width: '450px',
		height: ['400px', '200px'],
		showNumOfRemainingPhotos: true,
		photos: photos,
		style: { padding: '4px', backgroundSize: 'contain' },
	};
	const collageSettingSmall = {
		height: ['300px', '150px'],
		showNumOfRemainingPhotos: true,
		photos: photos,
		style: { backgroundSize: 'contain' },
	};

	return (
		<>
			<Modal isOpen={showModal} shouldCloseOnOverlayClick={true} onRequestClose={closeModal} style={modalStyle}>
				<div id='modal-content' className='flex flex-col lg:flex-row justify-between pt-6 pb-4'>
					{photos.length > 0 ? (
						<>
							<div className='h-full m-auto w-1/2 items-center lg:pr-5 justify-center hidden lg:flex'>
								<ReactPhotoCollage {...collageSetting} layout={photos.length > 1 ? [1, 2] : [1]}/>
							</div>
							<div className='w-4/5 mx-auto h-4/6 flex items-center lg:pr-5 justify-center lg:hidden'>
								<ReactPhotoCollage {...collageSettingSmall} layout={photos.length > 1 ? [1, 2] : [1]}/>
							</div>
						</>
					) : (
						<div>No Image Found</div>
					)}
					<div className='w-full h-2/6 lg:w-1/2 lg:pl-5 lg:h-full lg:border-l-2'>
						<div className='lg:my-20'>
							<h1 className='text-2xl lg:text-6xl font-bold mb-4 pt-16'>{product.series}</h1>
							<div className='lg:pl-2'>
								<div className='italic text-gray-500'>{product.description ? product.description : 'No description added.'}</div>
								<div className='mt-6 lg:absolute bottom-6 right-6 flex space-x-4'>
									<div className='border border-orange-600 rounded-full px-4 py-1'>{product.category.name}</div>
									<div className='border border-orange-600 rounded-full px-4 py-1'>{product.subCategory.name}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ProductModal;
