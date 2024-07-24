export default function VideoPlayer({ srcVideo, typeVideo = "video/mp4" }) {
  return (
    <>
      <video className="w-full rounded-xl" controls>
        <source src={srcVideo} type={typeVideo} />
      </video>
    </>
  );
}
