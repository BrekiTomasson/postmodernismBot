export class AggressiveTokenizer {
    tokenize(text: any): any;
}
export class AggressiveTokenizerEs {
    tokenize(text: any): any;
}
export class AggressiveTokenizerFa {
    clearEmptyString(array: any): any;
    clearText(text: any): any;
    tokenize(text: any): any;
}
export class AggressiveTokenizerFr {
    tokenize(text: any): any;
}
export class AggressiveTokenizerIt {
    tokenize(text: any): any;
}
export class AggressiveTokenizerNl {
    tokenize(text: any): any;
}
export class AggressiveTokenizerNo {
    tokenize(text: any): any;
}
export class AggressiveTokenizerPl {
    clearText(text: any): any;
    tokenize(text: any): any;
    withoutEmpty(array: any): any;
}
export class AggressiveTokenizerPt {
    tokenize(text: any): any;
    withoutEmpty(array: any): any;
}
export class AggressiveTokenizerRu {
    clearText(text: any): any;
    tokenize(text: any): any;
    withoutEmpty(array: any): any;
}
export class AggressiveTokenizerSv {
    tokenize(text: any): any;
}
export class AggressiveTokenizerVi {
    tokenize(text: any): any;
}
export class BrillPOSTagger {
    applyRules(sentence: any): any;
    tag(sentence: any): any;
    tagWithLexicon(sentence: any): any;
}
export class BrillPOSTester {
    test(corpus: any, tagger: any): any;
}
export class BrillPOSTrainer {
    associateSiteWithRule(i: any, j: any, rule: any): void;
    disconnectSiteFromRule(i: any, j: any, rule: any): void;
    generatePositiveRules(i: any, j: any): any;
    getRules(i: any, j: any): any;
    getSites(rule: any): any;
    mapRuleToSite(rule: any, i: any, j: any): void;
    mapSiteToRule(i: any, j: any, rule: any): void;
    neighbourhood(i: any, j: any): any;
    printRulesWithScores(): any;
    scanForPositiveRules(): void;
    scanForSites(): void;
    scoreRule(rule: any, i: any, j: any): void;
    selectHighRule(): any;
    siteIsAssociatedWithRule(i: any, j: any, rule: any): any;
    train(corpus: any, templates: any, lexicon: any): any;
}
export class CaseTokenizer {
    attach(): any;
    tokenize(text: any, preserveApostrophe: any): any;
}
export class Context {
    constructor(data: any);
    toString(): any;
}
export class Corpus {
    constructor(data: any, typeOfCorpus: any, SentenceClass: any);
    analyse(): void;
    buildLexicon(): any;
    generateFeatures(): any;
    getTags(): any;
    nrSentences(): any;
    nrWords(): any;
    parseBrownCorpus(data: any, SentenceClass: any): void;
    prettyPrint(): void;
    splitInTrainAndTest(percentageTrain: any): any;
    tag(lexicon: any): void;
}
export class EdgeWeightedDigraph {
    add(start: any, end: any, weight: any): void;
    addEdge(e: any): void;
    e(): any;
    edges(): any;
    getAdj(v: any): any;
    toString(): any;
    v(): any;
}
export class Element {
    constructor(a: any, b: any);
    toString(): any;
}
export class Feature {
    constructor(f: any, name: any, parameters: any);
    apply(x: any): any;
    expectation(p: any, A: any, B: any): any;
    expectationApprox(p: any, sample: any): any;
    observedExpectation(sample: any): any;
}
export class FeatureSet {
    addFeature(feature: any): any;
    featureExists(feature: any): any;
    getFeatures(): any;
    prettyPrint(): any;
    size(): any;
}
export class GISScaler {
    constructor(featureSet: any, sample: any);
    addCorrectionFeature(): any;
    calculateMaxSumOfFeatures(): any;
    run(maxIterations: any, minImprovement: any): any;
}
export class Lexicon {
    constructor(filename: any, defaultCategory: any, defaultCategoryCapitalised: any);
    addWord(word: any, categories: any): void;
    nrEntries(): any;
    parseLexicon(data: any): void;
    prettyPrint(): any;
    setDefaultCategories(category: any, categoryCapitalised: any): void;
    size(): any;
    tagWord(word: any): any;
    tagWordWithDefaults(word: any): any;
}
export class LongestPathTree {
    constructor(digraph: any, start: any);
    getDistTo(v: any): any;
    hasPathTo(v: any): any;
    pathTo(v: any): any;
    relaxEdge(e: any): void;
    relaxVertex(digraph: any, vertex: any, tree: any): void;
}
export class ME_Corpus {
    constructor(data: any, BROWN: any, SentenceClass: any);
    generateSample(): any;
    splitInTrainAndTest(percentageTrain: any): any;
}
export class ME_Sentence {
    generateSampleElements(sample: any): void;
}
export class MaxEntClassifier {
    constructor(features: any, sample: any);
    addDocument(context: any, classification: any, elementClass: any): void;
    addElement(x: any): void;
    classify(b: any): any;
    getClassifications(b: any): any;
    load(filename: any, elementClass: any, callback: any): void;
    save(filename: any, callback: any): void;
    train(maxIterations: any, minImprovement: any, approxExpectation: any): void;
}
export class POS_Element {
    constructor(a: any, b: any);
    generateFeatures(featureSet: any): any;
}
export class RegexpTokenizer {
    constructor(options: any);
    tokenize(s: any): any;
}
export class RuleSet {
    constructor(filename: any);
    addRule(rule: any): any;
    getRules(): any;
    hasRule(rule: any): any;
    nrRules(): any;
    prettyPrint(): any;
    removeRule(rule: any): void;
}
export class RuleTemplate {
    constructor(templateName: any, metadata: any);
    windowFitsSite(sentence: any, i: any): any;
}
export class SE_Element {
    constructor(a: any, b: any);
    generateFeatures(featureSet: any): any;
}
export class Sample {
    constructor(elements: any);
    addElement(x: any): void;
    analyse(): void;
    generateFeatures(featureSet: any): void;
    getClasses(): any;
    load(filename: any, elementClass: any, callback: any): void;
    observedProbability(x: any): any;
    observedProbabilityOfContext(context: any): any;
    save(filename: any, callback: any): void;
    size(): any;
}
export class Sentence {
    addTaggedWord(token: any, tag: any): void;
    clone(): any;
}
export class SentenceAnalyzer {
    constructor(pos: any, callback: any);
    implicitYou(): any;
    part(callback: any): void;
    predicateToString(): any;
    prepositionPhrases(): void;
    subjectToString(): any;
    toString(): any;
    type(callback: any): any;
}
export class SentenceTokenizer {
    tokenize(text: any): any;
}
export class SentimentAnalyzer {
    constructor(...args: any[]);
    getSentiment(...args: any[]): void;
}
export class ShortestPathTree {
    constructor(digraph: any, start: any);
    getDistTo(v: any): any;
    hasPathTo(v: any): any;
    pathTo(v: any): any;
    relaxEdge(e: any): void;
    relaxVertex(digraph: any, vertex: any, tree: any): void;
}
export class Spellcheck {
    constructor(wordlist: any);
    edits(word: any): any;
    editsWithMaxDistance(word: any, distance: any): any;
    editsWithMaxDistanceHelper(distanceCounter: any, distance2edits: any): any;
    getCorrections(word: any, maxDistance: any): any;
    isCorrect(word: any): any;
}
export class StemmerJa {
    constructor();
    attach(): any;
    isKatakana(str: any): any;
    stem(token: any): any;
    stemKatakana(token: any): any;
    tokenizeAndStem(text: any, keepStops: any): any;
}
export class TfIdf {
    constructor(deserialized: any);
    addDocument(document: any, key: any, restoreCache: any): void;
    addFileSync(path: any, encoding: any, key: any, restoreCache: any): void;
    idf(term: any, force: any): any;
    listTerms(d: any): any;
    setStopwords(customStopwords: any): any;
    setTokenizer(t: any): void;
    tfidf(terms: any, d: any): any;
    tfidfs(terms: any, callback: any): any;
    static tf(term: any, document: any): any;
}
export class TokenizerJa {
    constructor();
    ctype_(str: any): any;
    removePuncTokens(tokens: any): any;
    tokenize(text: any): any;
    ts_(v: any): any;
}
export class TreebankWordTokenizer {
    constructor();
    tokenize(text: any): any;
}
export class Trie {
    constructor(caseSensitive: any);
    addString(string: any): any;
    addStrings(list: any): void;
    contains(string: any): any;
    findMatchesOnPath(search: any): any;
    findPrefix(search: any): any;
    getSize(): any;
    keysWithPrefix(prefix: any): any;
}
export const RuleTemplates: {
    "CURRENT-WORD-ENDS-WITH": {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    "CURRENT-WORD-IS-CAP": {
        function: any;
        nrParameters: number;
        window: number[];
    };
    "CURRENT-WORD-IS-NUMBER": {
        function: any;
        nrParameters: number;
        window: number[];
    };
    "CURRENT-WORD-IS-URL": {
        function: any;
        nrParameters: number;
        window: number[];
    };
    CURWD: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    DEFAULT: {
        function: any;
        nrParameters: number;
        window: number[];
    };
    LBIGRAM: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    "NEXT-TAG": {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    "NEXT-WORD-IS-CAP": {
        function: any;
        nrParameters: number;
        window: number[];
    };
    "NEXT-WORD-IS-TAG": {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    NEXT1OR2OR3TAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    NEXT1OR2TAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    NEXT1OR2WD: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    NEXT2TAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    NEXTBIGRAM: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    NEXTTAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    NEXTWD: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    "PREV-1-OR-2-OR-3-TAG": {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    "PREV-1-OR-2-TAG": {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    "PREV-TAG": {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    "PREV-WORD-IS": {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    "PREV-WORD-IS-CAP": {
        function: any;
        nrParameters: number;
        window: number[];
    };
    PREV1OR2OR3TAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    PREV1OR2TAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    PREV1OR2WD: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    PREV2TAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    PREVBIGRAM: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    PREVTAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    PREVWD: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        window: number[];
    };
    RBIGRAM: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    SURROUNDTAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    WDAND2AFT: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    WDAND2TAGAFT: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    WDAND2TAGBFR: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    WDNEXTTAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
    WDPREVTAG: {
        function: any;
        nrParameters: number;
        parameter1Values: any;
        parameter2Values: any;
        window: number[];
    };
};
export const stopwords: string[];
export function BayesClassifier(stemmer: any, smoothing: any): void;
export function CountInflector(): void;
export function DamerauLevenshteinDistance(source: any, target: any, options: any): any;
export function DiceCoefficient(str1: any, str2: any): any;
export function HammingDistance(s1: any, s2: any, ignoreCase: any): any;
export function JaroWinklerDistance(s1: any, s2: any, dj: any, ignoreCase: any): any;
export function LevenshteinDistance(source: any, target: any, options: any): any;
export function NounInflector(): any;
export function NounInflectorFr(): any;
export function NounInflectorJa(): any;
export function OrthographyTokenizer(options: any): void;
export function PresentVerbInflector(): void;
export function WordNet(dataDir: any): void;
export function WordPunctTokenizer(options: any): void;
export function WordTokenizer(options: any): void;
export function normalize(tokens: any): any;
export function normalize_ja(str: any): any;
export function removeDiacritics(str: any): any;
export function transliterate_ja(str: any): any;
export namespace AggressiveTokenizer {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerEs {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerFa {
    function attach(): any;
    function clearEmptyString(array: any): any;
    function clearText(text: any): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace clearEmptyString {
        const prototype: {};
    }
    namespace clearText {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerFr {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerIt {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerNl {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerNo {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerPl {
    function attach(): any;
    function clearText(text: any): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    function withoutEmpty(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace clearText {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
    namespace withoutEmpty {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerPt {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    function withoutEmpty(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
    namespace withoutEmpty {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerRu {
    function attach(): any;
    function clearText(text: any): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    function withoutEmpty(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace clearText {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
    namespace withoutEmpty {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerSv {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace AggressiveTokenizerVi {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace BayesClassifier {
    function load(filename: any, stemmer: any, callback: any): any;
    function restore(classifier: any, stemmer: any): any;
    namespace load {
        const prototype: {};
    }
    namespace prototype {
        function addDocument(text: any, classification: any): void;
        function classify(observation: any): any;
        function getClassifications(observation: any): any;
        function removeDocument(text: any, classification: any): void;
        function retrain(): void;
        function save(filename: any, callback: any): void;
        function setOptions(options: any): void;
        function textToFeatures(observation: any): any;
        function train(): void;
        namespace addDocument {
            const prototype: {
            };
        }
        namespace classify {
            const prototype: {
            };
        }
        namespace getClassifications {
            const prototype: {
            };
        }
        namespace removeDocument {
            const prototype: {
            };
        }
        namespace retrain {
            const prototype: {
            };
        }
        namespace save {
            const prototype: {
            };
        }
        namespace setOptions {
            const prototype: {
            };
        }
        namespace textToFeatures {
            const prototype: {
            };
        }
        namespace train {
            const prototype: {
            };
        }
    }
    namespace restore {
        const prototype: {};
    }
}
export namespace BrillPOSTagger {
    function applyRules(sentence: any): any;
    function tag(sentence: any): any;
    function tagWithLexicon(sentence: any): any;
    namespace applyRules {
        const prototype: {};
    }
    namespace tag {
        const prototype: {};
    }
    namespace tagWithLexicon {
        const prototype: {};
    }
}
export namespace BrillPOSTester {
    function test(corpus: any, tagger: any): any;
    namespace test {
        const prototype: {};
    }
}
export namespace BrillPOSTrainer {
    function associateSiteWithRule(i: any, j: any, rule: any): void;
    function disconnectSiteFromRule(i: any, j: any, rule: any): void;
    function generatePositiveRules(i: any, j: any): any;
    function getRules(i: any, j: any): any;
    function getSites(rule: any): any;
    function mapRuleToSite(rule: any, i: any, j: any): void;
    function mapSiteToRule(i: any, j: any, rule: any): void;
    function neighbourhood(i: any, j: any): any;
    function printRulesWithScores(): any;
    function scanForPositiveRules(): void;
    function scanForSites(): void;
    function scoreRule(rule: any, i: any, j: any): void;
    function selectHighRule(): any;
    function siteIsAssociatedWithRule(i: any, j: any, rule: any): any;
    function train(corpus: any, templates: any, lexicon: any): any;
    namespace associateSiteWithRule {
        const prototype: {};
    }
    namespace disconnectSiteFromRule {
        const prototype: {};
    }
    namespace generatePositiveRules {
        const prototype: {};
    }
    namespace getRules {
        const prototype: {};
    }
    namespace getSites {
        const prototype: {};
    }
    namespace mapRuleToSite {
        const prototype: {};
    }
    namespace mapSiteToRule {
        const prototype: {};
    }
    namespace neighbourhood {
        const prototype: {};
    }
    namespace printRulesWithScores {
        const prototype: {};
    }
    namespace scanForPositiveRules {
        const prototype: {};
    }
    namespace scanForSites {
        const prototype: {};
    }
    namespace scoreRule {
        const prototype: {};
    }
    namespace selectHighRule {
        const prototype: {};
    }
    namespace siteIsAssociatedWithRule {
        const prototype: {};
    }
    namespace train {
        const prototype: {};
    }
}
export namespace CaseTokenizer {
    function attach(): any;
    function tokenize(text: any, preserveApostrophe: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace tokenize {
        const prototype: {};
    }
    namespace trim {
        const prototype: {};
    }
}
export namespace Context {
    function toString(): any;
    namespace toString {
        const prototype: {};
    }
}
export namespace Corpus {
    function analyse(): void;
    function buildLexicon(): any;
    function generateFeatures(): any;
    function getTags(): any;
    function nrSentences(): any;
    function nrWords(): any;
    function parseBrownCorpus(data: any, SentenceClass: any): void;
    function prettyPrint(): void;
    function splitInTrainAndTest(percentageTrain: any): any;
    function tag(lexicon: any): void;
    namespace analyse {
        const prototype: {};
    }
    namespace buildLexicon {
        const prototype: {};
    }
    namespace generateFeatures {
        const prototype: {};
    }
    namespace getTags {
        const prototype: {};
    }
    namespace nrSentences {
        const prototype: {};
    }
    namespace nrWords {
        const prototype: {};
    }
    namespace parseBrownCorpus {
        const prototype: {};
    }
    namespace prettyPrint {
        const prototype: {};
    }
    namespace splitInTrainAndTest {
        const prototype: {};
    }
    namespace tag {
        const prototype: {};
    }
}
export namespace CountInflector {
    const prototype: {};
    function nth(i: any): any;
    namespace nth {
        const prototype: {};
    }
}
export namespace DamerauLevenshteinDistance {
    const prototype: {};
}
export namespace DiceCoefficient {
    const prototype: {};
}
export namespace DoubleMetaphone {
    function attach(): any;
    function compare(stringA: any, stringB: any): any;
    function isVowel(c: any): any;
    function process(token: any, maxLength: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace compare {
        const prototype: {};
    }
    namespace isVowel {
        const prototype: {};
    }
    namespace process {
        const prototype: {};
    }
}
export namespace EdgeWeightedDigraph {
    function add(start: any, end: any, weight: any): void;
    function addEdge(e: any): void;
    function e(): any;
    function edges(): any;
    function getAdj(v: any): any;
    function toString(): any;
    function v(): any;
    namespace add {
        const prototype: {};
    }
    namespace addEdge {
        const prototype: {};
    }
    namespace e {
        const prototype: {};
    }
    namespace edges {
        const prototype: {};
    }
    namespace getAdj {
        const prototype: {};
    }
    namespace toString {
        const prototype: {};
    }
    namespace v {
        const prototype: {};
    }
}
export namespace Element {
    function toString(): any;
    namespace toString {
        const prototype: {};
    }
}
export namespace Feature {
    function apply(x: any): any;
    function expectation(p: any, A: any, B: any): any;
    function expectationApprox(p: any, sample: any): any;
    function observedExpectation(sample: any): any;
    namespace apply {
        const prototype: {};
    }
    namespace expectation {
        const prototype: {};
    }
    namespace expectationApprox {
        const prototype: {};
    }
    namespace observedExpectation {
        const prototype: {};
    }
}
export namespace FeatureSet {
    function addFeature(feature: any): any;
    function featureExists(feature: any): any;
    function getFeatures(): any;
    function prettyPrint(): any;
    function size(): any;
    namespace addFeature {
        const prototype: {};
    }
    namespace featureExists {
        const prototype: {};
    }
    namespace getFeatures {
        const prototype: {};
    }
    namespace prettyPrint {
        const prototype: {};
    }
    namespace size {
        const prototype: {};
    }
}
export namespace GISScaler {
    function addCorrectionFeature(): any;
    function calculateMaxSumOfFeatures(): any;
    function run(maxIterations: any, minImprovement: any): any;
    namespace addCorrectionFeature {
        const prototype: {};
    }
    namespace calculateMaxSumOfFeatures {
        const prototype: {};
    }
    namespace run {
        const prototype: {};
    }
}
export namespace HammingDistance {
    const prototype: {};
}
export namespace JaroWinklerDistance {
    const prototype: {};
}
export namespace LancasterStemmer {
    function addStopWord(stopWord: any): void;
    function addStopWords(moreStopWords: any): void;
    function attach(): any;
    function removeStopWord(stopWord: any): void;
    function removeStopWords(moreStopWords: any): void;
    function stem(token: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace addStopWord {
        const prototype: {};
    }
    namespace addStopWords {
        const prototype: {};
    }
    namespace attach {
        const prototype: {};
    }
    namespace removeStopWord {
        const prototype: {};
    }
    namespace removeStopWords {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace LevenshteinDistance {
    const prototype: {};
}
export namespace Lexicon {
    function addWord(word: any, categories: any): void;
    function nrEntries(): any;
    function parseLexicon(data: any): void;
    function prettyPrint(): any;
    function setDefaultCategories(category: any, categoryCapitalised: any): void;
    function size(): any;
    function tagWord(word: any): any;
    function tagWordWithDefaults(word: any): any;
    namespace addWord {
        const prototype: {};
    }
    namespace nrEntries {
        const prototype: {};
    }
    namespace parseLexicon {
        const prototype: {};
    }
    namespace prettyPrint {
        const prototype: {};
    }
    namespace setDefaultCategories {
        const prototype: {};
    }
    namespace size {
        const prototype: {};
    }
    namespace tagWord {
        const prototype: {};
    }
    namespace tagWordWithDefaults {
        const prototype: {};
    }
}
export namespace LogisticRegressionClassifier {
    function addDocument(text: any, classification: any): void;
    function classify(observation: any): any;
    function getClassifications(observation: any): any;
    function removeDocument(text: any, classification: any): void;
    function retrain(): void;
    function save(filename: any, callback: any): void;
    function setOptions(options: any): void;
    function textToFeatures(observation: any): any;
    function train(): void;
    namespace addDocument {
        const prototype: {};
    }
    namespace classify {
        const prototype: {};
    }
    namespace getClassifications {
        const prototype: {};
    }
    namespace removeDocument {
        const prototype: {};
    }
    namespace retrain {
        const prototype: {};
    }
    namespace save {
        const prototype: {};
    }
    namespace setOptions {
        const prototype: {};
    }
    namespace textToFeatures {
        const prototype: {};
    }
    namespace train {
        const prototype: {};
    }
    namespace restore {
        const prototype: {};
    }
}
export namespace LongestPathTree {
    function getDistTo(v: any): any;
    function hasPathTo(v: any): any;
    function pathTo(v: any): any;
    function relaxEdge(e: any): void;
    function relaxVertex(digraph: any, vertex: any, tree: any): void;
    namespace getDistTo {
        const prototype: {};
    }
    namespace hasPathTo {
        const prototype: {};
    }
    namespace pathTo {
        const prototype: {};
    }
    namespace relaxEdge {
        const prototype: {};
    }
    namespace relaxVertex {
        const prototype: {};
    }
}
export namespace ME_Corpus {
    function analyse(): void;
    function buildLexicon(): any;
    function generateFeatures(): any;
    function generateSample(): any;
    function getTags(): any;
    function nrSentences(): any;
    function nrWords(): any;
    function parseBrownCorpus(data: any, SentenceClass: any): void;
    function prettyPrint(): void;
    function splitInTrainAndTest(percentageTrain: any): any;
    function tag(lexicon: any): void;
    namespace analyse {
        const prototype: {};
    }
    namespace buildLexicon {
        const prototype: {};
    }
    namespace generateFeatures {
        const prototype: {};
    }
    namespace generateSample {
        const prototype: {};
    }
    namespace getTags {
        const prototype: {};
    }
    namespace nrSentences {
        const prototype: {};
    }
    namespace nrWords {
        const prototype: {};
    }
    namespace parseBrownCorpus {
        const prototype: {};
    }
    namespace prettyPrint {
        const prototype: {};
    }
    namespace splitInTrainAndTest {
        const prototype: {};
    }
    namespace tag {
        const prototype: {};
    }
}
export namespace ME_Sentence {
    function addTaggedWord(token: any, tag: any): void;
    function clone(): any;
    function generateSampleElements(sample: any): void;
    namespace addTaggedWord {
        const prototype: {};
    }
    namespace clone {
        const prototype: {};
    }
    namespace generateSampleElements {
        const prototype: {};
    }
}
export namespace MaxEntClassifier {
    function addDocument(context: any, classification: any, elementClass: any): void;
    function addElement(x: any): void;
    function classify(b: any): any;
    function getClassifications(b: any): any;
    function load(filename: any, elementClass: any, callback: any): void;
    function save(filename: any, callback: any): void;
    function train(maxIterations: any, minImprovement: any, approxExpectation: any): void;
    namespace addDocument {
        const prototype: {};
    }
    namespace addElement {
        const prototype: {};
    }
    namespace classify {
        const prototype: {};
    }
    namespace getClassifications {
        const prototype: {};
    }
    namespace load {
        const prototype: {};
    }
    namespace save {
        const prototype: {};
    }
    namespace train {
        const prototype: {};
    }
}
export namespace Metaphone {
    function attach(): any;
    function cTransform(token: any): any;
    function compare(stringA: any, stringB: any): any;
    function dTransform(token: any): any;
    function dedup(token: any): any;
    function dropBafterMAtEnd(token: any): any;
    function dropG(token: any): any;
    function dropH(token: any): any;
    function dropInitialLetters(token: any): any;
    function dropT(token: any): any;
    function dropVowels(token: any): any;
    function dropW(token: any): any;
    function dropY(token: any): any;
    function process(token: any, maxLength: any): any;
    function transformCK(token: any): any;
    function transformG(token: any): any;
    function transformPH(token: any): any;
    function transformQ(token: any): any;
    function transformS(token: any): any;
    function transformT(token: any): any;
    function transformV(token: any): any;
    function transformWH(token: any): any;
    function transformX(token: any): any;
    function transformZ(token: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace cTransform {
        const prototype: {};
    }
    namespace compare {
        const prototype: {};
    }
    namespace dTransform {
        const prototype: {};
    }
    namespace dedup {
        const prototype: {};
    }
    namespace dropBafterMAtEnd {
        const prototype: {};
    }
    namespace dropG {
        const prototype: {};
    }
    namespace dropH {
        const prototype: {};
    }
    namespace dropInitialLetters {
        const prototype: {};
    }
    namespace dropT {
        const prototype: {};
    }
    namespace dropVowels {
        const prototype: {};
    }
    namespace dropW {
        const prototype: {};
    }
    namespace dropY {
        const prototype: {};
    }
    namespace process {
        const prototype: {};
    }
    namespace transformCK {
        const prototype: {};
    }
    namespace transformG {
        const prototype: {};
    }
    namespace transformPH {
        const prototype: {};
    }
    namespace transformQ {
        const prototype: {};
    }
    namespace transformS {
        const prototype: {};
    }
    namespace transformT {
        const prototype: {};
    }
    namespace transformV {
        const prototype: {};
    }
    namespace transformWH {
        const prototype: {};
    }
    namespace transformX {
        const prototype: {};
    }
    namespace transformZ {
        const prototype: {};
    }
}
export namespace NGrams {
    function bigrams(sequence: any, startSymbol: any, endSymbol: any, stats: any): any;
    function multrigrams(sequence: any, n: any, startSymbol: any, endSymbol: any, stats: any): any;
    function ngrams(sequence: any, n: any, startSymbol: any, endSymbol: any, stats: any): any;
    function setTokenizer(t: any): void;
    function trigrams(sequence: any, startSymbol: any, endSymbol: any, stats: any): any;
    namespace bigrams {
        const prototype: {};
    }
    namespace multrigrams {
        const prototype: {};
    }
    namespace ngrams {
        const prototype: {};
    }
    namespace setTokenizer {
        const prototype: {};
    }
    namespace trigrams {
        const prototype: {};
    }
}
export namespace NGramsZH {
    function bigrams(sequence: any, startSymbol: any, endSymbol: any): any;
    function ngrams(sequence: any, n: any, startSymbol: any, endSymbol: any): any;
    function trigrams(sequence: any, startSymbol: any, endSymbol: any): any;
    namespace bigrams {
        const prototype: {};
    }
    namespace ngrams {
        const prototype: {};
    }
    namespace trigrams {
        const prototype: {};
    }
}
export namespace NounInflector {
    namespace prototype {
        function addForm(singularTable: any, pluralTable: any, singular: any, plural: any): void;
        function addIrregular(singular: any, plural: any): void;
        function addPlural(pattern: any, replacement: any): void;
        function addSingular(pattern: any, replacement: any): void;
        function ize(token: any, formSet: any, customForms: any): any;
        function izeAbiguous(token: any): any;
        function izeRegExps(token: any, forms: any): any;
        function izeRegulars(token: any, formSet: any): any;
        function pluralize(token: any): any;
        function restoreCase(token: any): any;
        function singularize(token: any): any;
        namespace addForm {
            const prototype: {
            };
        }
        namespace addIrregular {
            const prototype: {
            };
        }
        namespace addPlural {
            const prototype: {
            };
        }
        namespace addSingular {
            const prototype: {
            };
        }
        namespace ize {
            const prototype: {
            };
        }
        namespace izeAbiguous {
            const prototype: {
            };
        }
        namespace izeRegExps {
            const prototype: {
            };
        }
        namespace izeRegulars {
            const prototype: {
            };
        }
        namespace pluralize {
            const prototype: {
            };
        }
        namespace restoreCase {
            const prototype: {
            };
        }
        namespace singularize {
            const prototype: {
            };
        }
    }
}
export namespace NounInflectorFr {
    namespace prototype {
        function addForm(singularTable: any, pluralTable: any, singular: any, plural: any): void;
        function addIrregular(singular: any, plural: any): void;
        function addPlural(pattern: any, replacement: any): void;
        function addSingular(pattern: any, replacement: any): void;
        function ize(token: any, formSet: any, customForms: any): any;
        function izeAbiguous(token: any): any;
        function izeRegExps(token: any, forms: any): any;
        function izeRegulars(token: any, formSet: any): any;
        function pluralize(token: any): any;
        function restoreCase(token: any): any;
        function singularize(token: any): any;
        namespace addForm {
            const prototype: {
            };
        }
        namespace addIrregular {
            const prototype: {
            };
        }
        namespace addPlural {
            const prototype: {
            };
        }
        namespace addSingular {
            const prototype: {
            };
        }
        namespace ize {
            const prototype: {
            };
        }
        namespace izeAbiguous {
            const prototype: {
            };
        }
        namespace izeRegExps {
            const prototype: {
            };
        }
        namespace izeRegulars {
            const prototype: {
            };
        }
        namespace pluralize {
            const prototype: {
            };
        }
        namespace restoreCase {
            const prototype: {
            };
        }
        namespace singularize {
            const prototype: {
            };
        }
    }
}
export namespace NounInflectorJa {
    namespace prototype {
        function addForm(singularTable: any, pluralTable: any, singular: any, plural: any): void;
        function addIrregular(singular: any, plural: any): void;
        function addPlural(pattern: any, replacement: any): void;
        function addSingular(pattern: any, replacement: any): void;
        function ize(token: any, formSet: any, customForms: any): any;
        function izeAbiguous(token: any): any;
        function izeRegExps(token: any, forms: any): any;
        function izeRegulars(token: any, formSet: any): any;
        function pluralize(token: any): any;
        function restoreCase(token: any): any;
        function singularize(token: any): any;
        namespace addForm {
            const prototype: {
            };
        }
        namespace addIrregular {
            const prototype: {
            };
        }
        namespace addPlural {
            const prototype: {
            };
        }
        namespace addSingular {
            const prototype: {
            };
        }
        namespace ize {
            const prototype: {
            };
        }
        namespace izeAbiguous {
            const prototype: {
            };
        }
        namespace izeRegExps {
            const prototype: {
            };
        }
        namespace izeRegulars {
            const prototype: {
            };
        }
        namespace pluralize {
            const prototype: {
            };
        }
        namespace restoreCase {
            const prototype: {
            };
        }
        namespace singularize {
            const prototype: {
            };
        }
    }
}
export namespace OrthographyTokenizer {
    namespace prototype {
        function attach(): any;
        function tokenize(s: any): any;
        function trim(array: any): any;
        namespace attach {
            const prototype: {
            };
        }
        namespace tokenize {
            const prototype: {
            };
        }
        namespace trim {
            const prototype: {
            };
        }
    }
}
export namespace POS_Element {
    function generateFeatures(featureSet: any): any;
    function toString(): any;
    namespace generateFeatures {
        const prototype: {};
    }
    namespace toString {
        const prototype: {};
    }
}
export namespace PorterStemmer {
    function addStopWord(stopWord: any): void;
    function addStopWords(moreStopWords: any): void;
    function attach(): any;
    function categorizeGroups(token: any): any;
    function measure(token: any): any;
    function removeStopWord(stopWord: any): void;
    function removeStopWords(moreStopWords: any): void;
    function stem(token: any): any;
    function step1a(token: any): any;
    function step1b(token: any): any;
    function step1c(token: any): any;
    function step2(token: any): any;
    function step3(token: any): any;
    function step4(token: any): any;
    function step5a(token: any): any;
    function step5b(token: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace addStopWord {
        const prototype: {};
    }
    namespace addStopWords {
        const prototype: {};
    }
    namespace attach {
        const prototype: {};
    }
    namespace categorizeGroups {
        const prototype: {};
    }
    namespace measure {
        const prototype: {};
    }
    namespace removeStopWord {
        const prototype: {};
    }
    namespace removeStopWords {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace step1a {
        const prototype: {};
    }
    namespace step1b {
        const prototype: {};
    }
    namespace step1c {
        const prototype: {};
    }
    namespace step2 {
        const prototype: {};
    }
    namespace step3 {
        const prototype: {};
    }
    namespace step4 {
        const prototype: {};
    }
    namespace step5a {
        const prototype: {};
    }
    namespace step5b {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace PorterStemmerEs {
    function attach(...args: any[]): void;
    function endsIn(...args: any[]): void;
    function endsInArr(...args: any[]): void;
    function isVowel(...args: any[]): void;
    function nextConsonantPosition(...args: any[]): void;
    function nextVowelPosition(...args: any[]): void;
    function removeAccent(...args: any[]): void;
    function stem(...args: any[]): void;
    function tokenizeAndStem(...args: any[]): void;
}
export namespace PorterStemmerFa {
    function attach(): any;
    function stem(token: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace PorterStemmerFr {
    function attach(): any;
    function endsinArr(token: any, suffixes: any): any;
    function prelude(token: any): any;
    function regions(token: any): any;
    function stem(token: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace endsinArr {
        const prototype: {};
    }
    namespace prelude {
        const prototype: {};
    }
    namespace regions {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace PorterStemmerIt {
    function attach(): any;
    function stem(token: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace PorterStemmerNl {
    function attach(...args: any[]): void;
    function handleYI(...args: any[]): void;
    function markRegions(...args: any[]): void;
    function postlude(...args: any[]): void;
    function prelude(...args: any[]): void;
    function replaceAccentedCharacters(...args: any[]): void;
    function stem(...args: any[]): void;
    function step1(...args: any[]): void;
    function step1b(...args: any[]): void;
    function step2(...args: any[]): void;
    function step3a(...args: any[]): void;
    function step3b(...args: any[]): void;
    function step4(...args: any[]): void;
    function tokenizeAndStem(...args: any[]): void;
}
export namespace PorterStemmerNo {
    function addStopWord(stopWord: any): void;
    function addStopWords(moreStopWords: any): void;
    function attach(): any;
    function getR1(token: any): any;
    function stem(token: any): any;
    function step1(token: any): any;
    function step1a(token: any): any;
    function step1b(token: any): any;
    function step1c(token: any): any;
    function step2(token: any): any;
    function step3(token: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace addStopWord {
        const prototype: {};
    }
    namespace addStopWords {
        const prototype: {};
    }
    namespace attach {
        const prototype: {};
    }
    namespace getR1 {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace step1 {
        const prototype: {};
    }
    namespace step1a {
        const prototype: {};
    }
    namespace step1b {
        const prototype: {};
    }
    namespace step1c {
        const prototype: {};
    }
    namespace step2 {
        const prototype: {};
    }
    namespace step3 {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace PorterStemmerPt {
    function addStopWords(words: any): void;
    function attach(): any;
    function stem(word: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace addStopWords {
        const prototype: {};
    }
    namespace attach {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace PorterStemmerRu {
    function attach(): any;
    function stem(token: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace PorterStemmerSv {
    function addStopWord(stopWord: any): void;
    function addStopWords(moreStopWords: any): void;
    function attach(): any;
    function stem(_str: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace addStopWord {
        const prototype: {};
    }
    namespace addStopWords {
        const prototype: {};
    }
    namespace attach {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace PresentVerbInflector {
    namespace prototype {
        function addForm(singularTable: any, pluralTable: any, singular: any, plural: any): void;
        function addIrregular(singular: any, plural: any): void;
        function addPlural(pattern: any, replacement: any): void;
        function addSingular(pattern: any, replacement: any): void;
        function ize(token: any, formSet: any, customForms: any): any;
        function izeAbiguous(token: any): any;
        function izeRegExps(token: any, forms: any): any;
        function izeRegulars(token: any, formSet: any): any;
        function pluralize(token: any): any;
        function restoreCase(token: any): any;
        function singularize(token: any): any;
        namespace addForm {
            const prototype: {
            };
        }
        namespace addIrregular {
            const prototype: {
            };
        }
        namespace addPlural {
            const prototype: {
            };
        }
        namespace addSingular {
            const prototype: {
            };
        }
        namespace ize {
            const prototype: {
            };
        }
        namespace izeAbiguous {
            const prototype: {
            };
        }
        namespace izeRegExps {
            const prototype: {
            };
        }
        namespace izeRegulars {
            const prototype: {
            };
        }
        namespace pluralize {
            const prototype: {
            };
        }
        namespace restoreCase {
            const prototype: {
            };
        }
        namespace singularize {
            const prototype: {
            };
        }
    }
}
export namespace RegexpTokenizer {
    function attach(): any;
    function tokenize(s: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {
        };
    }
    namespace tokenize {
        const prototype: {
        };
    }
    namespace trim {
        const prototype: {
        };
    }
}
export namespace RuleSet {
    function addRule(rule: any): any;
    function getRules(): any;
    function hasRule(rule: any): any;
    function nrRules(): any;
    function prettyPrint(): any;
    function removeRule(rule: any): void;
    namespace addRule {
        const prototype: {
        };
    }
    namespace getRules {
        const prototype: {
        };
    }
    namespace hasRule {
        const prototype: {
        };
    }
    namespace nrRules {
        const prototype: {
        };
    }
    namespace prettyPrint {
        const prototype: {
        };
    }
    namespace removeRule {
        const prototype: {
        };
    }
}
export namespace RuleTemplate {
    function windowFitsSite(sentence: any, i: any): any;
    namespace windowFitsSite {
        const prototype: {
        };
    }
}
export namespace SE_Element {
    function generateFeatures(featureSet: any): any;
    function toString(): any;
    namespace generateFeatures {
        const prototype: {
        };
    }
    namespace toString {
        const prototype: {
        };
    }
}
export namespace Sample {
    function addElement(x: any): void;
    function analyse(): void;
    function generateFeatures(featureSet: any): void;
    function getClasses(): any;
    function load(filename: any, elementClass: any, callback: any): void;
    function observedProbability(x: any): any;
    function observedProbabilityOfContext(context: any): any;
    function save(filename: any, callback: any): void;
    function size(): any;
    namespace addElement {
        const prototype: {
        };
    }
    namespace analyse {
        const prototype: {
        };
    }
    namespace generateFeatures {
        const prototype: {
        };
    }
    namespace getClasses {
        const prototype: {
        };
    }
    namespace load {
        const prototype: {
        };
    }
    namespace observedProbability {
        const prototype: {
        };
    }
    namespace observedProbabilityOfContext {
        const prototype: {
        };
    }
    namespace save {
        const prototype: {
        };
    }
    namespace size {
        const prototype: {
        };
    }
}
export namespace Sentence {
    function addTaggedWord(token: any, tag: any): void;
    function clone(): any;
    namespace addTaggedWord {
        const prototype: {
        };
    }
    namespace clone {
        const prototype: {
        };
    }
}
export namespace SentenceAnalyzer {
    function implicitYou(): any;
    function part(callback: any): void;
    function predicateToString(): any;
    function prepositionPhrases(): void;
    function subjectToString(): any;
    function toString(): any;
    function type(callback: any): any;
    namespace implicitYou {
        const prototype: {
        };
    }
    namespace part {
        const prototype: {
        };
    }
    namespace predicateToString {
        const prototype: {
        };
    }
    namespace prepositionPhrases {
        const prototype: {
        };
    }
    namespace subjectToString {
        const prototype: {
        };
    }
    namespace toString {
        const prototype: {
        };
    }
    namespace type {
        const prototype: {
        };
    }
}
export namespace SentenceTokenizer {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {
        };
    }
    namespace tokenize {
        const prototype: {
        };
    }
    namespace trim {
        const prototype: {
        };
    }
}
export namespace SentimentAnalyzer {
    function getSentiment(...args: any[]): void;
}
export namespace ShortestPathTree {
    function getDistTo(v: any): any;
    function hasPathTo(v: any): any;
    function pathTo(v: any): any;
    function relaxEdge(e: any): void;
    function relaxVertex(digraph: any, vertex: any, tree: any): void;
    namespace getDistTo {
        const prototype: {
        };
    }
    namespace hasPathTo {
        const prototype: {
        };
    }
    namespace pathTo {
        const prototype: {
        };
    }
    namespace relaxEdge {
        const prototype: {
        };
    }
    namespace relaxVertex {
        const prototype: {
        };
    }
}
export namespace SoundEx {
    function attach(): any;
    function compare(stringA: any, stringB: any): any;
    function condense(token: any): any;
    function padRight0(token: any): any;
    function process(token: any, maxLength: any): any;
    function transformHum(token: any): any;
    function transformL(token: any): any;
    function transformLipps(token: any): any;
    function transformR(token: any): any;
    function transformThroats(token: any): any;
    function transformToungue(token: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace compare {
        const prototype: {};
    }
    namespace condense {
        const prototype: {};
    }
    namespace padRight0 {
        const prototype: {};
    }
    namespace process {
        const prototype: {};
    }
    namespace transformHum {
        const prototype: {};
    }
    namespace transformL {
        const prototype: {};
    }
    namespace transformLipps {
        const prototype: {};
    }
    namespace transformR {
        const prototype: {};
    }
    namespace transformThroats {
        const prototype: {};
    }
    namespace transformToungue {
        const prototype: {};
    }
}
export namespace SoundExDM {
    function attach(): any;
    function compare(stringA: any, stringB: any): any;
    function process(word: any, codeLength: any): any;
    namespace attach {
        const prototype: {};
    }
    namespace compare {
        const prototype: {};
    }
    namespace process {
        const prototype: {};
    }
}
export namespace Spellcheck {
    function edits(word: any): any;
    function editsWithMaxDistance(word: any, distance: any): any;
    function editsWithMaxDistanceHelper(distanceCounter: any, distance2edits: any): any;
    function getCorrections(word: any, maxDistance: any): any;
    function isCorrect(word: any): any;
    namespace edits {
        const prototype: {};
    }
    namespace editsWithMaxDistance {
        const prototype: {};
    }
    namespace editsWithMaxDistanceHelper {
        const prototype: {};
    }
    namespace getCorrections {
        const prototype: {};
    }
    namespace isCorrect {
        const prototype: {};
    }
}
export namespace StemmerId {
    const dictionary: string[];
    function a(word: any): any;
    function addStopWord(stopWord: any): void;
    function addStopWords(moreStopWords: any): void;
    function attach(): any;
    function isPlural(token: any): any;
    function removeStopWord(stopWord: any): void;
    function removeStopWords(moreStopWords: any): void;
    function stem(token: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace a {
        const prototype: {};
    }
    namespace addStopWord {
        const prototype: {};
    }
    namespace addStopWords {
        const prototype: {};
    }
    namespace attach {
        const prototype: {};
    }
    namespace isPlural {
        const prototype: {};
    }
    namespace removeStopWord {
        const prototype: {};
    }
    namespace removeStopWords {
        const prototype: {};
    }
    namespace stem {
        const prototype: {};
    }
    namespace tokenizeAndStem {
        const prototype: {};
    }
}
export namespace StemmerJa {
    function attach(): any;
    function isKatakana(str: any): any;
    function stem(token: any): any;
    function stemKatakana(token: any): any;
    function tokenizeAndStem(text: any, keepStops: any): any;
    namespace attach {
        const prototype: {
        };
    }
    namespace isKatakana {
        const prototype: {
        };
    }
    namespace stem {
        const prototype: {
        };
    }
    namespace stemKatakana {
        const prototype: {
        };
    }
    namespace tokenizeAndStem {
        const prototype: {
        };
    }
}
export namespace TfIdf {
    function addDocument(document: any, key: any, restoreCache: any): void;
    function addFileSync(path: any, encoding: any, key: any, restoreCache: any): void;
    function idf(term: any, force: any): any;
    function listTerms(d: any): any;
    function setStopwords(customStopwords: any): any;
    function setTokenizer(t: any): void;
    function tfidf(terms: any, d: any): any;
    function tfidfs(terms: any, callback: any): any;
    namespace addDocument {
        const prototype: {
        };
    }
    namespace addFileSync {
        const prototype: {
        };
    }
    namespace idf {
        const prototype: {
        };
    }
    namespace listTerms {
        const prototype: {
        };
    }
    namespace setStopwords {
        const prototype: {
        };
    }
    namespace setTokenizer {
        const prototype: {
        };
    }
    namespace tfidf {
        const prototype: {
        };
    }
    namespace tfidfs {
        const prototype: {
        };
    }
}
export namespace TokenizerJa {
    function attach(): any;
    function ctype_(str: any): any;
    function removePuncTokens(tokens: any): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    function ts_(v: any): any;
    namespace attach {
        const prototype: {
        };
    }
    namespace ctype_ {
        const prototype: {
        };
    }
    namespace removePuncTokens {
        const prototype: {
        };
    }
    namespace tokenize {
        const prototype: {
        };
    }
    namespace trim {
        const prototype: {
        };
    }
    namespace ts_ {
        const prototype: {
        };
    }
}
export namespace TreebankWordTokenizer {
    function attach(): any;
    function tokenize(text: any): any;
    function trim(array: any): any;
    namespace attach {
        const prototype: {
        };
    }
    namespace tokenize {
        const prototype: {
        };
    }
    namespace trim {
        const prototype: {
        };
    }
}
export namespace Trie {
    function addString(string: any): any;
    function addStrings(list: any): void;
    function contains(string: any): any;
    function findMatchesOnPath(search: any): any;
    function findPrefix(search: any): any;
    function getSize(): any;
    function keysWithPrefix(prefix: any): any;
    namespace addString {
        const prototype: {
        };
    }
    namespace addStrings {
        const prototype: {
        };
    }
    namespace contains {
        const prototype: {
        };
    }
    namespace findMatchesOnPath {
        const prototype: {
        };
    }
    namespace findPrefix {
        const prototype: {
        };
    }
    namespace getSize {
        const prototype: {
        };
    }
    namespace keysWithPrefix {
        const prototype: {
        };
    }
}
export namespace WordNet {
    const prototype: {};
}
export namespace WordPunctTokenizer {
    namespace prototype {
        function attach(): any;
        function tokenize(s: any): any;
        function trim(array: any): any;
        namespace attach {
            const prototype: {
            };
        }
        namespace tokenize {
            const prototype: {
            };
        }
        namespace trim {
            const prototype: {
            };
        }
    }
}
export namespace WordTokenizer {
    namespace prototype {
        function attach(): any;
        function tokenize(s: any): any;
        function trim(array: any): any;
        namespace attach {
            const prototype: {
            };
        }
        namespace tokenize {
            const prototype: {
            };
        }
        namespace trim {
            const prototype: {
            };
        }
    }
}
export namespace normalize {
    const prototype: {};
}
export namespace normalize_ja {
    const prototype: {};
}
export namespace removeDiacritics {
    const prototype: {};
}
export namespace transliterate_ja {
    const prototype: {};
}
