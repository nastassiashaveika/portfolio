import datasetSample from 'figma:asset/2a6b531b8f6ee02a67c30d0f7b12a1168a17a30c.png';
import mobileV2Preds from 'figma:asset/0af43f0dd2177c112d23092d6e928c03dc6db1f9.png';
import inceptionPreds from 'figma:asset/2ed590d90390162a0e398ca04499d0b5ca979288.png';

const classes = ['Lying', 'Maltese', 'Sitting', 'Standing', 'Westie', 'With People'];
const mobilePrec =   [0.83, 0.98, 0.81, 0.80, 0.78, 0.64];
const inceptionPrec = [0.60, 0.95, 0.58, 0.71, 0.70, 0.57];

export function DogPaper({ onClose }: { onClose: () => void }) {
  const mobileMatrix = [
    [40, 0, 5, 1, 1, 2],
    [0, 51, 1, 0, 3, 0],
    [3, 0, 26, 3, 2, 1],
    [1, 0, 3, 12, 2, 0],
    [1, 0, 1, 1, 35, 0],
    [0, 1, 0, 0, 1, 9],
  ];

  const inceptionMatrix = [
    [36, 0, 5, 1, 5, 2],
    [0, 53, 0, 0, 2, 0],
    [8, 0, 15, 5, 5, 2],
    [3, 0, 5, 5, 5, 0],
    [1, 0, 1, 1, 35, 0],
    [1, 0, 2, 1, 3, 4],
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#d1d5dc_transparent]">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-[80px] py-5 flex items-center gap-6 z-10">
        <button
          onClick={onClose}
          className="text-[10px] uppercase tracking-[0.14em] text-gray-400 hover:text-black transition-colors flex items-center gap-1.5"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          ← Go back
        </button>
        <span className="text-[10px] uppercase tracking-[0.14em] text-gray-300" style={{ fontFamily: 'var(--font-mono)' }}>
          My Dog Turned Into Data — 2024
        </span>
      </div>

      <div className="max-w-[720px] mx-auto py-[60px] px-[40px]">
        {/* Title block */}
        <h1 className="leading-[1.1] font-bold tracking-[-0.02em] mb-2" style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: '#0c0c0c' }}>
          My Dog Turned Into Data
        </h1>
        <p className="text-[13px] tracking-[0.1em] text-gray-400 uppercase mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
          Paws and Pixels: Ronnie's Routine Classification
        </p>
        <p className="text-[11px] text-gray-300 mb-10" style={{ fontFamily: 'var(--font-mono)' }}>December 22, 2024</p>

        <div className="text-[16px] leading-[1.8]" style={{ color: '#536372' }}>

          {/* Introduction */}
          <PaperSection title="Introduction">
            <p className="mb-4">
              <strong style={{ color: '#0c0c0c' }}>Can a CNN tell my dog apart from other Westies? Can it figure out if he's sitting, lying, or just standing there being cute? And can it tell a West Highland White Terrier from a Maltese?</strong>
            </p>
            <p className="mb-4">
              The dataset used for this project is a collection of personal images from my Google Photos archive, specifically featuring my dog, Ronnie. Google Photos provides advanced image recognition capabilities, allowing it to differentiate between people, pets, and other objects. Using the Google Takeout service, I exported the album titled "Ronnie", which contains all the photos of my dog, to a .zip file in my Google Drive. This file was 1GB in size and included metadata and high-resolution images.
            </p>
            <p className="mb-4">
              Initially, I attempted to expand the dataset by downloading additional photos from Google Photos. This required addressing duplicate images using Python, but my efforts to filter out duplicates were unsuccessful, as the code inadvertently retained them. The overwhelming task of cleaning the data led me to explore alternative datasets.
            </p>
            <p className="mb-4">
              I discovered the Stanford Dogs Dataset through the Awesome Public Datasets repository. This dataset included 170 images of West Highland White Terriers, the same breed as Ronnie. I incorporated these images into my final dataset to enrich its diversity and size. Additionally, after a passerby mistook Ronnie for a Maltese and said, "Take away your Maltese" (after that person's husky barked at Ronnie), I decided to evaluate whether my model could differentiate between West Highland White Terriers and similarly white-coated breeds like Maltese, since some dog owners cannot.
            </p>
          </PaperSection>

          {/* Data */}
          <PaperSection title="The Data">
            <p className="mb-5">
              The final dataset has <strong style={{ color: '#0c0c0c' }}>1,032 images across 6 classes</strong>, loaded via TensorFlow's <Code>image_dataset_from_directory</Code>, resized to 160×160px, batch size 32.
            </p>

            {/* Class bar chart */}
            <div className="my-6 space-y-2">
              {[
                { label: 'Maltese (not Ronnie)', count: 252 },
                { label: 'Lying', count: 229 },
                { label: 'Sitting', count: 178 },
                { label: 'Westie (not Ronnie)', count: 169 },
                { label: 'Standing', count: 123 },
                { label: 'With People', count: 81 },
              ].map(({ label, count }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[11px] w-[160px] shrink-0 text-right" style={{ fontFamily: 'var(--font-mono)', color: '#8a97a3' }}>{label}</span>
                  <div className="flex-1 bg-gray-100 rounded-sm h-5 relative overflow-hidden">
                    <div className="h-full rounded-sm" style={{ width: `${(count / 252) * 100}%`, backgroundColor: '#bfcfe8' }} />
                  </div>
                  <span className="text-[11px] w-8 shrink-0" style={{ fontFamily: 'var(--font-mono)', color: '#0c0c0c' }}>{count}</span>
                </div>
              ))}
            </div>

            <p className="mb-5">
              There's a real imbalance here — "With People" only has 81 images vs. 252 Maltese shots. That gap shows up later in the results. The split was 80/20: 826 training, 206 validation.
            </p>

            {/* Dataset sample image */}
            <figure className="my-6">
              <img src={datasetSample} alt="Sample images from the dataset" className="w-full rounded" />
              <figcaption className="text-[11px] mt-3 text-center leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                A random sample from the dataset — Ronnie, other Westies, Maltese dogs, and various poses.
              </figcaption>
            </figure>

            <CodeBlock>{`full_dataset = image_dataset_from_directory(
    dataset_path,
    seed=123,
    image_size=(160, 160),
    batch_size=32
)
# Found 1032 files belonging to 6 classes.`}</CodeBlock>
          </PaperSection>

          {/* Model Selection */}
          <PaperSection title="Model Selection">
            <h3 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>MobileNetV2</h3>
            <p className="mb-4">
              Transfer learning with a frozen MobileNetV2 base (<Code>base_model.trainable = False</Code>). Images get rescaled from [0, 255] to [0, 1], passed through GlobalAveragePooling2D, a 20% Dropout layer, then a Dense softmax over 6 classes.
            </p>
            <p className="mb-4">
              MobileNetV2's depthwise separable convolutions keep things lean — 2.3M total params, only 7,686 trainable. The inverted residuals and linear bottlenecks cut compute significantly compared to a standard conv layer.
            </p>

            <CodeBlock>{`base_model = MobileNetV2(input_shape=(160, 160, 3),
                        include_top=False,
                        weights='imagenet')
base_model.trainable = False

# Total params:     2,265,670
# Trainable params:     7,686`}</CodeBlock>

            <h3 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-8" style={{ fontFamily: 'var(--font-mono)' }}>InceptionV3</h3>
            <p className="mb-4">
              After ruling out NasNet (NaN losses), ResNet50 (23.5M params, too heavy for this dataset), and EfficientNet (too fiddly to tune), I went with InceptionV3. Its parallel 1×1, 3×3, and 5×5 convolutions capture features at multiple scales — nice in theory. In practice, 21.8M parameters on 1,032 images is a lot to ask.
            </p>

            <CodeBlock>{`inception_base = InceptionV3(input_shape=(160, 160, 3),
                            include_top=False,
                            weights='imagenet')
inception_base.trainable = False

# Total params:     21,815,078
# Trainable params:     12,294`}</CodeBlock>
          </PaperSection>

          {/* Training */}
          <PaperSection title="Training">
            <p className="mb-4">
              Both models trained with EarlyStopping (patience=5, restoring best weights) and ModelCheckpoint saving only the best epoch.
            </p>

            <h3 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-6" style={{ fontFamily: 'var(--font-mono)' }}>MobileNetV2 — 20 Epochs</h3>
            <p className="mb-5">Training loss went from 1.61 → 0.22, accuracy from 39% → 94%. Validation accuracy peaked at 84% on epoch 16.</p>

            <div className="my-6">
              <div className="flex items-end gap-[3px] h-[80px]">
                {[0.617, 0.689, 0.718, 0.748, 0.767, 0.757, 0.786, 0.806, 0.811, 0.816, 0.820, 0.820, 0.820, 0.820, 0.825, 0.840, 0.840, 0.840, 0.825, 0.840].map((v, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${v * 100}%`, backgroundColor: i === 15 ? '#2563eb' : '#bfcfe8' }} />
                ))}
              </div>
              <div className="flex justify-between mt-1 text-[10px]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                <span>Epoch 1</span><span>Epoch 20</span>
              </div>
              <p className="text-[11px] mt-1 text-center" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>Validation accuracy by epoch. Blue = best (Epoch 16, 84.0%)</p>
            </div>

            <h3 className="text-[14px] uppercase tracking-[0.1em] text-black mb-3 mt-6" style={{ fontFamily: 'var(--font-mono)' }}>InceptionV3 — 18 Epochs</h3>
            <p className="mb-4">
              Running past 18 epochs caused val accuracy to degrade — likely a learning rate issue. InceptionV3 had a prior best of 85.9% from a fine-tuning session but couldn't replicate it, settling around 71–72%.
            </p>

            <CodeBlock>{`history = inception_model.fit(
    train_dataset,
    validation_data=validation_dataset,
    epochs=18,
    callbacks=[early_stopping, model_checkpoint]
)
# Best val_accuracy: 0.7184`}</CodeBlock>
          </PaperSection>

          {/* Results */}
          <PaperSection title="Results">
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="border border-gray-200 rounded p-5">
                <p className="text-[10px] uppercase tracking-[0.12em] text-gray-400 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>MobileNetV2</p>
                <p className="text-[2rem] leading-none mb-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>84%</p>
                <p className="text-[12px] text-gray-400" style={{ fontFamily: 'var(--font-mono)' }}>validation accuracy</p>
                <p className="text-[12px] text-gray-400 mt-1" style={{ fontFamily: 'var(--font-mono)' }}>val loss: 0.5470</p>
              </div>
              <div className="border border-gray-200 rounded p-5">
                <p className="text-[10px] uppercase tracking-[0.12em] text-gray-400 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>InceptionV3</p>
                <p className="text-[2rem] leading-none mb-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#536372' }}>72%</p>
                <p className="text-[12px] text-gray-400" style={{ fontFamily: 'var(--font-mono)' }}>validation accuracy</p>
                <p className="text-[12px] text-gray-400 mt-1" style={{ fontFamily: 'var(--font-mono)' }}>val loss: 0.8978</p>
              </div>
            </div>

            <p className="mb-4">
              MobileNetV2 wins across the board. InceptionV3's bigger capacity actually hurts here — 21.8M parameters on a 1,032-image dataset is asking for overfitting. MobileNetV2's lighter touch generalizes much better.
            </p>

            {/* Vertical bar chart — precision comparison */}
            <div className="my-8">
              <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 mb-5" style={{ fontFamily: 'var(--font-mono)' }}>Per-class precision</p>
              <div className="flex items-end gap-3 h-[140px]">
                {classes.map((cls, i) => (
                  <div key={cls} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <div className="w-full flex gap-[2px] items-end" style={{ height: '120px' }}>
                      <div
                        className="flex-1 rounded-t-sm"
                        style={{ height: `${mobilePrec[i] * 100}%`, backgroundColor: '#2563eb', opacity: 0.75 }}
                        title={`MobileNetV2: ${mobilePrec[i].toFixed(2)}`}
                      />
                      <div
                        className="flex-1 rounded-t-sm"
                        style={{ height: `${inceptionPrec[i] * 100}%`, backgroundColor: '#f97316', opacity: 0.65 }}
                        title={`InceptionV3: ${inceptionPrec[i].toFixed(2)}`}
                      />
                    </div>
                    <span className="text-[9px] text-center leading-tight w-full" style={{ fontFamily: 'var(--font-mono)', color: '#8a97a3' }}>
                      {cls === 'With People' ? 'W/ People' : cls === 'Maltese' ? 'Maltese' : cls}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-5 mt-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#2563eb', opacity: 0.75 }} />
                  <span className="text-[10px]" style={{ fontFamily: 'var(--font-mono)', color: '#8a97a3' }}>MobileNetV2</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#f97316', opacity: 0.65 }} />
                  <span className="text-[10px]" style={{ fontFamily: 'var(--font-mono)', color: '#8a97a3' }}>InceptionV3</span>
                </div>
              </div>
            </div>
          </PaperSection>

          {/* Confusion Matrices */}
          <PaperSection title="Confusion Matrices">
            <h3 className="text-[14px] uppercase tracking-[0.1em] text-black mb-4 mt-2" style={{ fontFamily: 'var(--font-mono)' }}>MobileNetV2</h3>
            <ConfusionMatrix matrix={mobileMatrix} labels={classes} />

            <figure className="my-6">
              <img src={mobileV2Preds} alt="MobileNetV2 sample predictions" className="w-full rounded" />
              <figcaption className="text-[11px] mt-2 text-center leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Sample predictions from MobileNetV2 — true label on top, predicted below.
              </figcaption>
            </figure>

            <div className="my-5 space-y-3 text-[14px]" style={{ color: '#536372' }}>
              <p><strong style={{ color: '#0c0c0c' }}>Maltese:</strong> Best class — 0.98 precision, 0.93 recall. Way better than that husky's owner.</p>
              <p><strong style={{ color: '#0c0c0c' }}>Lying:</strong> 0.83 precision, 0.82 recall. Some confusion with "Sitting" — fair, those two can look pretty similar.</p>
              <p><strong style={{ color: '#0c0c0c' }}>Standing:</strong> Weakest activity class — recall 0.67, often mixed up with "Sitting."</p>
              <p><strong style={{ color: '#0c0c0c' }}>With People:</strong> Only 11 validation samples. Doing alright at 0.64 precision / 0.82 recall given the data scarcity.</p>
            </div>

            <div className="my-6 border border-gray-200 rounded overflow-hidden text-[12px]" style={{ fontFamily: 'var(--font-mono)' }}>
              <div className="grid grid-cols-5 bg-[#f7f7f5] px-4 py-2.5 text-[10px] uppercase tracking-[0.08em] text-gray-400">
                <span>Class</span><span>Precision</span><span>Recall</span><span>F1</span><span>Support</span>
              </div>
              {[
                ['Lying',       '0.83', '0.82', '0.82', '49'],
                ['Maltese',     '0.98', '0.93', '0.95', '55'],
                ['Sitting',     '0.81', '0.74', '0.78', '35'],
                ['Standing',    '0.80', '0.67', '0.73', '18'],
                ['Westie',      '0.78', '0.92', '0.84', '38'],
                ['With People', '0.64', '0.82', '0.72', '11'],
                ['', '', '', '', ''],
                ['accuracy',   '', '', '0.84', '206'],
                ['macro avg',  '0.81', '0.82', '0.81', '206'],
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-5 px-4 py-2 border-t border-gray-100 ${row[0] === '' ? 'border-t-2 border-gray-200' : ''}`} style={{ color: row[0] === 'accuracy' || row[0] === 'macro avg' ? '#0c0c0c' : '#536372' }}>
                  {row.map((cell, j) => <span key={j}>{cell}</span>)}
                </div>
              ))}
            </div>

            <h3 className="text-[14px] uppercase tracking-[0.1em] text-black mb-4 mt-10" style={{ fontFamily: 'var(--font-mono)' }}>InceptionV3</h3>
            <ConfusionMatrix matrix={inceptionMatrix} labels={classes} />

            <figure className="my-6">
              <img src={inceptionPreds} alt="InceptionV3 sample predictions" className="w-full rounded" />
              <figcaption className="text-[11px] mt-2 text-center leading-[1.5]" style={{ color: '#8a97a3', fontFamily: 'var(--font-mono)' }}>
                Sample predictions from InceptionV3 — noticeably more confusion between poses.
              </figcaption>
            </figure>

            <div className="my-5 space-y-3 text-[14px]" style={{ color: '#536372' }}>
              <p><strong style={{ color: '#0c0c0c' }}>Sitting:</strong> Recall drops to 0.43 — InceptionV3 misses more than half of sitting instances, mostly calling them "Lying."</p>
              <p><strong style={{ color: '#0c0c0c' }}>Standing:</strong> Recall 0.28 — it's really struggling here, missing 72% of standing images.</p>
              <p><strong style={{ color: '#0c0c0c' }}>With People:</strong> Recall 0.36, precision 0.57. Small sample + visual overlap = rough.</p>
              <p><strong style={{ color: '#0c0c0c' }}>Maltese:</strong> Still great — 0.95 / 0.96. Breed distinction holds up even in the weaker model.</p>
            </div>

            <div className="my-6 border border-gray-200 rounded overflow-hidden text-[12px]" style={{ fontFamily: 'var(--font-mono)' }}>
              <div className="grid grid-cols-5 bg-[#f7f7f5] px-4 py-2.5 text-[10px] uppercase tracking-[0.08em] text-gray-400">
                <span>Class</span><span>Precision</span><span>Recall</span><span>F1</span><span>Support</span>
              </div>
              {[
                ['Lying',       '0.60', '0.73', '0.66', '49'],
                ['Maltese',     '0.95', '0.96', '0.95', '55'],
                ['Sitting',     '0.58', '0.43', '0.49', '35'],
                ['Standing',    '0.71', '0.28', '0.40', '18'],
                ['Westie',      '0.70', '0.92', '0.80', '38'],
                ['With People', '0.57', '0.36', '0.44', '11'],
                ['', '', '', '', ''],
                ['accuracy',   '', '', '0.72', '206'],
                ['macro avg',  '0.68', '0.61', '0.62', '206'],
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-5 px-4 py-2 border-t border-gray-100 ${row[0] === '' ? 'border-t-2 border-gray-200' : ''}`} style={{ color: row[0] === 'accuracy' || row[0] === 'macro avg' ? '#0c0c0c' : '#536372' }}>
                  {row.map((cell, j) => <span key={j}>{cell}</span>)}
                </div>
              ))}
            </div>
          </PaperSection>

          {/* Fine-tuning */}
          <PaperSection title="Fine-tuning">
            <p className="mb-4">Both models were fine-tuned by unfreezing base layers and recompiling with Adam at 1e-5.</p>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="border border-gray-200 rounded p-5">
                <p className="text-[10px] uppercase tracking-[0.12em] text-gray-400 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>MobileNetV2 fine-tuned</p>
                <div className="space-y-1 text-[12px]" style={{ fontFamily: 'var(--font-mono)', color: '#536372' }}>
                  <p>10 epochs, full unfreeze</p>
                  <p>val accuracy: 84% → <strong style={{ color: '#0c0c0c' }}>85.9%</strong></p>
                  <p>val loss: 0.55 → <strong style={{ color: '#0c0c0c' }}>0.489</strong></p>
                </div>
              </div>
              <div className="border border-gray-200 rounded p-5">
                <p className="text-[10px] uppercase tracking-[0.12em] text-gray-400 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>InceptionV3 fine-tuned</p>
                <div className="space-y-1 text-[12px]" style={{ fontFamily: 'var(--font-mono)', color: '#536372' }}>
                  <p>10 epochs, freeze first 50 layers</p>
                  <p>val accuracy: 72% → <strong style={{ color: '#0c0c0c' }}>76%</strong></p>
                  <p>val loss: 0.90 → <strong style={{ color: '#0c0c0c' }}>0.81</strong></p>
                </div>
              </div>
            </div>

            <p className="mb-4">
              MobileNetV2 fine-tuned cleanly — full unfreeze at 1e-5 just worked. InceptionV3 needed the first 50 layers frozen to avoid wrecking the low-level features it learned on ImageNet. Even then, the gains were modest.
            </p>

            <CodeBlock>{`# MobileNetV2 fine-tuning
base_model.trainable = True
model.compile(
    optimizer=Adam(learning_rate=1e-5),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
# Fine-Tuned Val Accuracy: 0.8592
# Fine-Tuned Val Loss:     0.4888`}</CodeBlock>
          </PaperSection>

          {/* Conclusion */}
          <PaperSection title="Takeaways">
            <p className="mb-4">
              Both models easily out-perform the passerby who couldn't tell a Westie from a Maltese. Breed distinction is solved. Pose classification is harder — the gap between a dog sitting and mid-stand is genuinely ambiguous.
            </p>
            <p className="mb-4">
              <strong style={{ color: '#0c0c0c' }}>MobileNetV2 is the clear winner.</strong> Its 2.3M-parameter design handles a small dataset far better than InceptionV3's 21.8M. More "Standing" and "With People" images would help both models. Augmentation or oversampling could partially fix the class imbalance without needing new photos of Ronnie.
            </p>
          </PaperSection>

          {/* References */}
          <div className="pt-12 border-t border-gray-200">
            <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 mb-5" style={{ fontFamily: 'var(--font-mono)' }}>References</p>
            <ul className="space-y-4 text-[12px] leading-[1.7]" style={{ color: '#536372', fontFamily: 'var(--font-mono)' }}>
              <li>Sandler, M. et al. (2018). MobileNetV2: Inverted Residuals and Linear Bottlenecks. <em>CVPR 2018</em>.</li>
              <li>Szegedy, C. et al. (2016). Rethinking the Inception Architecture for Computer Vision. <em>CVPR 2016</em>.</li>
              <li>Khosla, A. et al. Stanford Dogs Dataset. <a href="http://vision.stanford.edu/aditya86/ImageNetDogs/" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">vision.stanford.edu</a></li>
              <li>TensorFlow. Transfer Learning with TensorFlow. <a href="https://www.tensorflow.org/tutorials/images/transfer_learning" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2 hover:text-black transition-colors">tensorflow.org</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

function PaperSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-[1.6rem] leading-[1.2] mb-5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#0c0c0c' }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded text-[13px] bg-[#f7f7f5]" style={{ fontFamily: 'var(--font-mono)', color: '#334' }}>
      {children}
    </code>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 px-5 py-4 bg-[#f7f7f5] rounded text-[12px] leading-[1.9] overflow-x-auto" style={{ fontFamily: 'var(--font-mono)', color: '#334', whiteSpace: 'pre' }}>
      {children}
    </div>
  );
}

function ConfusionMatrix({ matrix, labels }: { matrix: number[][]; labels: string[] }) {
  const maxV = Math.max(...matrix.flat());

  function cellBg(val: number) {
    const t = val / maxV;
    const r = Math.round(239 - t * (239 - 30));
    const g = Math.round(246 - t * (246 - 100));
    const b = Math.round(255 - t * (255 - 200));
    return `rgb(${r},${g},${b})`;
  }

  const shortLabels = labels.map(l => l.length > 8 ? l.slice(0, 8) + '…' : l);

  return (
    <div className="overflow-x-auto my-4">
      <div style={{ display: 'inline-block', minWidth: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `80px repeat(${labels.length}, 60px)` }} className="mb-0.5">
          <div />
          {shortLabels.map(l => (
            <div key={l} className="text-[9px] text-center leading-tight pb-1" style={{ fontFamily: 'var(--font-mono)', color: '#8a97a3' }}>{l}</div>
          ))}
        </div>
        {matrix.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: `80px repeat(${labels.length}, 60px)` }} className="mb-0.5">
            <div className="text-[9px] text-right pr-2 flex items-center justify-end" style={{ fontFamily: 'var(--font-mono)', color: '#8a97a3' }}>{shortLabels[i]}</div>
            {row.map((val, j) => (
              <div
                key={j}
                className="h-[34px] flex items-center justify-center text-[11px] rounded-[2px] mx-[1px]"
                style={{
                  backgroundColor: cellBg(val),
                  fontFamily: 'var(--font-mono)',
                  color: val / maxV > 0.5 ? 'white' : '#334',
                  fontWeight: i === j ? 700 : 400,
                }}
              >
                {val}
              </div>
            ))}
          </div>
        ))}
        <div className="mt-2 text-[10px] text-center" style={{ fontFamily: 'var(--font-mono)', color: '#8a97a3' }}>
          Columns = Predicted · Rows = True
        </div>
      </div>
    </div>
  );
}