const Features = () => {
  return (
    <section 
      className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-10 bg-black text-white"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <p className="text-xs md:text-sm leading-5 text-[#CCCDC7]">Audio quality (1)</p>
          <h2 className="text-3xl md:text-5xl md:leading-14 font-medium">sounds like an <br /> epiphany</h2>
        </div>
        <p className="text-sm font-medium">Ost Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range. From deep, rich bass to accurate mids and crisp, clean highs, you’ll hear every note with a new sense of clarity.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl overflow-hidden h-full w-full aspect-3/2">
          <video className="h-full w-full object-cover" src="https://stream.mux.com/De01WzGO3AVD301B00N1cYFk1aor61oMCuBFINQsauGxPM.m3u8?min_resolution=1080p&redundant_streams=true" muted autoPlay playsInline preload="metadata" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default Features