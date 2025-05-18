const Avatar = ({ src, alt = 'avatar', size = 40 }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover"
    />
  );
}

export default Avatar;